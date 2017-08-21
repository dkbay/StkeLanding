# Getting started

This project requires both `npm` and `bower` to be installed.

### Installing Bower

All you need to install Bower is to run `npm install -g bower`.

## Initial setup

In the root directory of the repository, run:

1. `npm install` - This will install all the npm dependencies
2. `bower install` - This will download all the bower dependencies
3. To make sure everything runs as expected, run `./node_modules/.bin/webpack` and `./node_modules/.bin/webpack -p` to make sure the compiling works and populate the dist files.

# Compiling

To compile the assets, simply run `./node_modules/.bin/webpack`.

# Pushing to production

When pushing to production, make sure to use the -p flag: `./node_modules/.bin/webpack -p`. This will minify the dist files.

# Build "script"

`npm install`  
`bower install`  
`./node_modules/.bin/webpack`  
`./node_modules/.bin/webpack -p`