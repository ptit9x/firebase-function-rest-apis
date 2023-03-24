## Description

REST APIs are created by Firebase [functions](https://firebase.google.com/docs/functions/get-started) combine with [Express JS](https://expressjs.com/).

## Instruction
I created this project base on [this](https://firebase.google.com/docs/functions/http-events). Thank you [Express boilerplate](https://github.com/hagopj13/node-express-boilerplate) for inspiring me.

## Installation
You need to create [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0#setup_update_cli) in the first, then install npm

```bash
$ cd functions

$ npm install
```

## Running the app in local by [emulator](https://firebase.google.com/docs/emulator-suite/connect_and_prototype) 

```bash
# watch mode
$ npm run serve

# deploy to firebase function
# change firebase name you want to deploy in .firebaserc file
$ npm run deploy
```

## Test

```bash
# coding convention
$ npm run lint
```

## Stay in touch

- Author - [Richard Do](https://github.com/ptit9x)

## License

Nest is [MIT licensed](LICENSE).
