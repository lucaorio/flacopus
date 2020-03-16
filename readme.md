# Flacopus

> FLAC to Opus library converter

## Contents

- [Rationale](#rationale)
- [Usage](#usage)
- [License](#license)
- [Contacts](#contacts)

## Rationale

I built Flacopus to optimize a reasonably large library of audio files. These files are meant to be played on a DAP with balanced output.

The main requirements and features of this small project:

- it maintains the folder/file structure of the library
- it simply copies lossy audio files `.mp3`/`.opus` to avoid additional transposing
- it converts lossless audio files `.flac` to `.opus`
- covers are stripped from metadata
- additional `.jpg` files (i.e. `cover.jpg`) present in the album directory are copied

Bitrate of converted files is set at `192k`. With [Opus](https://opus-codec.org/) this already achieves [transparency](https://wiki.xiph.org/Opus_Recommended_Settings).

Flacopus only works on a very specific folder/file structure:

```
- Discography
  - Artist
    - Album
      - Track (flac|mp3|opus)
      - Track (flac|mp3|opus)
    - Album
      - Track (flac|mp3|opus)
  - Artist
    - Album
      - Track (flac|mp3|opus)
  ... etc
```

### Disclaimer

Feel free to fork and customize these scripts as you see fit, but keep in mind I have no interest in updating them to accommodate for other use cases.

## Usage

Clone this repository and install dependencies:

```shell
git clone http://github.com/lucaorio/flacopus && cd flacopus
yarn install # or npm install
```

Customize the path (relative, or absolute tilde) to your input and output directories in `package.json`. The `concurrent` value affects the amount of files converted in parallel.

```js
  // ...
  "config": {
    "input": "~/Discography",
    "output": "~/Discography/Opus",
    "concurrent": 40
  }
  // ...
```

Run the build script:

```shell
yarn build # or npm build
```

## License

![https://github.com/lucaorio/flacopus/blob/master/license](https://img.shields.io/badge/license-MIT-blue.svg)

---

## Contacts

- 🐦 Twitter [@lucaorio\_](http://twitter.com/@lucaorio_)
- 🕸 Website [lucaorio.com](http://lucaorio.com)
- 📬 Email [luca.o@me.com](mailto:luca.o@me.com)
