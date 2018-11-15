# JavaScript boilerplate

**Webpack 4, React, Babel 7, Airbnb ESLint, Prettier, Jest, Enzyme**

## Install

Swap out `APP_NAME` for your project name (you will still need to manually update the `package.json` name after install):

```
curl -L https://github.com/WebSeed/js-boilerplate/archive/master.zip | tar zx
mv js-boilerplate-master APP_NAME && cd APP_NAME
yarn
```

Then:

```
yarn start
```

See `package.json` scripts for full list of commands.

## Dependencies

CLI (requires NPM 5+ for `npx`):

```
yarn add webpack webpack-cli webpack-dev-server --dev
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader babel-eslint --dev
yarn add @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-class-properties --dev
yarn add html-webpack-plugin --dev
yarn add mini-css-extract-plugin css-loader file-loader --dev
yarn add react react-dom prop-types

yarn add jest babel-jest babel-core@^7.0.0-bridge.0 --dev
yarn add enzyme enzyme-adapter-react-16 enzyme-to-json react-test-renderer --dev

yarn add @babel/plugin-transform-runtime --dev
yarn add @babel/runtime

npx install-peerdeps --dev eslint-config-airbnb
yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
```
