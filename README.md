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