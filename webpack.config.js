import webpack from "webpack";

export default {
  mode: 'production',
  target: 'es6',
  entry: './src/main.ts',
  parallelism: 4,
  performance: {
    maxEntrypointSize: 2097152,
    hints: false,
  },
  output: {
    chunkFormat: 'module',
    filename: 'main.js', // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [new webpack.BannerPlugin({
    banner: 'module.exports.loop = ',
    raw: true
  })]
};
