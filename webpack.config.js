module.exports = {
  entry:[
    './app/main.js'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: "/build/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      // { test: /\.(png|jpg)$/, loader: 'file' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
       test: /\.(png|jpg|gif|svg)$/,
       loader: 'url',
       query: {
         limit: 10000,
         name: '[name].[ext]?[hash]'
       }
     }
    ]
  },
  devtool: '#source-map'
};
