const ffmpeg = require('fluent-ffmpeg')
const chalk = require('chalk')

// convert audio file (flac) to opus
module.exports = async (src, dest) => {
  return new Promise((resolve, reject) => {
    ffmpeg(src)
      .audioCodec('opus')
      .audioBitrate('192k')
      .on('start', () => {
        console.log(chalk.white(`Started: ${dest}`))
      })
      .on('error', error => {
        reject(error)
      })
      .on('end', () => {
        console.log(chalk.green(`Ended: ${dest}`))
        resolve()
      })
      .save(`${dest}`)
  })
}
