const path = require('path')
const fs = require('fs-extra')
const isLossy = require('./is-lossy')
const isCover = require('./is-cover')
const flacToOpus = require('./flac-to-opus')

// iterate throught the files to convert or copy
module.exports = async chunk => {
  const promises = chunk.map(async file => {
    if (isLossy(file.ext) || isCover(file.ext)) {
      return await fs.copy(file.src, file.dest)
    } else {
      const pathname = path.dirname(file.dest)
      const filename = `${path.parse(file.dest).name}.opus`
      fs.ensureDirSync(pathname)
      return await flacToOpus(file.src, `${pathname}/${filename}`)
    }
  })

  await Promise.all(promises)
}
