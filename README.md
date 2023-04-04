# tests-with-mocha
Creating a back-end app to practice some tests with Mocha


## Install the dependencies for mocha with typescript
```
npm install chai mocha ts-node @types/chai @types/mocha --save-dev
```
## Create the test/function
As we can see in ´src/calculator.ts´ and ´tests/calculator.spec.ts´

## Configure package scripts
```
"test": "mocha -r ts-node/register tests/**/*.spec.ts"
```

## Then run it with
```
npm test
```

## I created a app with express to test it, with the dependencies:
```
npm i express && npm i @types/express -D

npm i typescript -D
```

## Then I created the code
See scr/server.ts

## Change tsconfig.json
```
{
 "outDir": "./dist",
 "rootDir": "./src"
}
```
## Now to run the server locally
``` sh
npm i ts-node-dev -D
```
``` js
"scripts": {
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
  "build": "tsc"
}
```

## Then we can run it using
``` sh
npm run dev
```

# To test express app
we need to install chai-http
``` sh
npm i chai-http
```
And do it like in src/server.spec.ts
