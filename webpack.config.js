const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry  : path.resolve(__dirname,  './src/index.js'),
  output : {
    filename : 'bundle.js',
    path     : path.resolve(__dirname, 'dist')
  },
  module : {
         rules : [
          {
            test : /\.(sa|sc|c)ss$/,

            use : [
              'style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
              'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
          {
            test : /\.(png|svg|jpg|gif)$/,
            use  : [
              'file-loader'
            ]
          },

          { enforce : 'pre',
            test    : /\.js$/,
            exclude : /node_modules/,
            use     : 'eslint-loader'
          },

          {
            test    : /\.js$/,
            exclude : /(node_modules)/,
            use     : {
              loader  : 'babel-loader',
              options : {
                presets : [ '@babel/preset-env' ]
              }
            }
          }

        ]
    },
    plugins : [
      new MiniCssExtractPlugin( {

        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename : 'main.css'
      } ),
      new HtmlWebpackPlugin( )
    ]
};
