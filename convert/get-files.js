const untildify = require('untildify')
const output = require('../package.json').config.output

// get a clean list of files to convert or copy
module.exports = artists =>
  artists.map(artist =>
    artist.children.map(album =>
      album.children.map(file => {
        if (file.extension) {
          return {
            src: file.path,
            ext: file.extension,
            dest: `${untildify(output)}/${artist.name}/${album.name}/${
              file.name
            }`,
          }
        }
      })
    )
  )
