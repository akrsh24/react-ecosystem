# React Ecosystem
1. Babel (transpiler to convert ES6 to ES5).
2. Webpack (server to reload changes in the browser)
3. React (React DOM core files)

### Dependencies
1. **Babel**
- @babel/core — It provides basic core babel configuration
- @babel/preset-env — It allows to work with the latest ES6/ES7/ES8 features
- @babel/preset-react — It allows to work with react syntax which is JSX
- babel-loader (convert your ES6 and React code to ES5)
- @babel/plugin-proposal-class-properties

2. **Webpack** - It is used to serve the public directory and reload the changes in the browser when we make any change in the code

- webpack
- webpack-cli
- webpack-dev-server

3. React
- react
- react-dom

### Webpack config file
 1. Define entry point and output file inside public/ directory.
```
const path = require('path');
module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }
};
```
 2. Inform webpack-dev-server to load files from public directory.
 ``` 
const path = require('path');
module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
 ```
 3. Set up the babel-loader which will convert your ES6 and React code to ES5.
 ```
 const path = require('path');
module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
 ```


### Steps:
- Create a directory and inside it the package.json file. (npm init -y).
- Install all dependencies. 
```
npm install @babel/core@7.7.4 @babel/preset-env@7.7.4 @babel/preset-react@7.7.4

npm install webpack@4.41.2 webpack-cli@3.3.10 webpack-dev-server@3.9.0

npm install react@16.12.0 react-dom@16.12.0 babel-loader@8.0.6
```
- Create index.html file under public/ directory.
- Create app.js file under src/ directory.
- Create webpack.config.js file for all configurations.
- Create .babelrc file to tell the babel-loader to use env and react presets (which are just plugins) when converting ES6 to ES5.
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
- You're done with the configurations, add your react components. 
- Add output file (bundle.js) as a script in index.html.
```
    <script src="bundle.js"></script>
```
- Add npm scripts to package.json. 
```
"scripts": {
 "build": "webpack",
 "start": "webpack-dev-server --watch"
}
```
- By default webpack run mode is 'production', so we'll change it to 'development'.
- Run the react app
```
npm start
```

### Notes:
1. webpack-dev-server will serve the bundle.js directly and will not create a local file inside the public folder to speed up the page loading.

- To manually create bundle.js file, use
```
npm run build
```