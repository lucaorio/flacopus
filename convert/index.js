const untildify = require('untildify')
const dirtree = require('directory-tree')
const input = require('../package.json').config.input
const concurrent = require('../package.json').config.concurrent
const getFiles = require('./get-files')
const iterateFiles = require('./iterate-files')

;(async () => {
  // get the main library structure
  const tree = dirtree(untildify(input), {
    extensions: /\.(flac|mp3|opus|jpg|gif|png)$/,
  })

  // get a clean list of files to convert or copy
  const tracks = getFiles(tree.children)
    .flat(2)
    .filter(item => item && item)

  // divide the main array in chunks to process files in parallel
  const chunks = Array(Math.ceil(tracks.length / concurrent))
    .fill()
    .map((_, index) => index * concurrent)
    .map(begin => tracks.slice(begin, begin + concurrent))

  // iterate every chunk/file
  for (let chunk of chunks) {
    await iterateFiles(chunk)
  }
})()
