# Simple @planpay/web bundle demo for static app

## Overview
This project includes a very basic Webpack/Babel bundled app for viewing a planpay price-preview and checkout widgets. It makes use of the `@planpay/web` library.

## Running the app

To run the app, clone this repository locally.

Next, install the dependencies with:

```sh
npm install
```

Build the project using Webpack:

```sh
# Build the bundle
npx webpack
```

> _Note_: When you run a command with npx and the specified package is not found locally or globally, npx will download the package to a temporary location in the npm cache. This package is used just for the duration of the command execution.

It should then be possible to run the minimal [live-server](https://www.npmjs.com/package/live-server#getting-started) to serve the HTML page with the JavaScript module.

```sh
# Run the server to demo
npx live-server
```
The live-server will run the service on an available port. For example, if the output is:

```sh
❯ npx live-server
Debugger attached.
Debugger attached.
Serving "/home/user/source/project" at http://127.0.0.1:8080
Then open:
http://localhost:8080
```

Then open the following port in your browser:
http://localhost:8080

> _Note:_ Adjust port as needed according to the output of the previous command, as the port can vary.

A planpay price-preview widget and a planpay checkout widget should load on the resulting page.

## How the App Was Created

The following was used to install @planpay/web, the latest version of the package from NPM:

```sh
npm install @planpay/web
```

Babel and Webpack were also installed as dev-dependencies to transpile and pack the code into something the browser can interpret:

 ```sh
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env
 ```

The planpay [price-preview widget](https://docs.planpay.com/docs/developers/price-preview-integration/loading-the-price-preview-widget) and [planpay checkout widget](https://docs.planpay.com/docs/developers/checkout-integration/loading-the-checkout-widget) placeholder markup was then added to the index page, along with a link to the webpack+babel generated JavaScript bundle.
