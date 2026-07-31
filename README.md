# Webpack Template

## Setup

```console
npm install
```

## Usage

```console
# dev mode
npm run dev

# prod mode
npm run build

# gh-pages
npm run deploy
```

## Optional Configuration

For loading image files referenced directly in HTML:

```console
npm install --save-dev html-loader
```

```js
// webpack.common.js

{
  test: /\.html$/i,
  loader: "html-loader",
}
```

For loading image files imported in JavaScript:

```js
// webpack.common.js

{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}
```

For loading font files:

```js
// webpack.common.js

{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: "asset/resource",
}
```
