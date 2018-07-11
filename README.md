# Another Markdown Editor (AME)

A simple cross platform Markdown editor built with [Electron](https://electronjs.org/) and [SimpleMDE](https://simplemde.com/)

## Getting Started

Clone the repository:
```bash
git clone https://github.com/naseberry/another-markdown-editor.git
cd another-markdown-editor
```

## Running the application

To run the application locally, run:
```bash
npm install && npm start
```

## Packaging the application for platforms

To build the application for Linux, Mac and Windows, run: `npm run package`

To build the application for Linux, run: `npm run package:linux`

To build the application for Mac, run: `npm run package:mac`

To build the application for Windows, run: `npm run package:win`

Once built, the package(s) will be available in the directory `./dist`


## Contributing

If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Create a new Pull Request