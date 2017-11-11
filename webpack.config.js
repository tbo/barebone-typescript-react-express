var path = require("path");

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: "./client/index.tsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    stats: {
      assets: false,
            cached: false,
            cachedAssets: false,
            children: false,
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            colors: false,
            depth: false,
            entrypoints: false,
            errors: true,
            errorDetails: true,
            hash: false,
            maxModules: 0,
            modules: false,
            performance: false,
            providedExports: false,
            publicPath: false,
            reasons: false,
            source: false,
            timings: false,
            usedExports: false,
            version: false,
            warnings: false
    },
    overlay: true
  }
};
