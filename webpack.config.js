const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public')
};

module.exports = (env = {}) => {
  /**
   * Environment Configuration.
   * @type {[type]}
   */
  const ENV = env.config || 'development';
  const NODE_ENV = env.NODE_ENV || 'development';
  const PROD = NODE_ENV === 'production';

  /**
   * Plugin Definitions.
   * @return {[type]} [description]
   */
  const getPlugins = () => {
    let plugins  = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),

      new CleanWebpackPlugin(paths.build),

      new HtmlWebpackPlugin({
        template: `${paths.src}/index.html`
      })
    ];

    // Production Only.
    if(PROD) {
      plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    // Development Only.
    if(!PROD) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NamedModulesPlugin());
    }

    return plugins;
  }

  /**
   * Webpack Config.
   */
  return {
    entry: {
      app: [
        'babel-polyfill',
        ...(!PROD ? [
          'react-hot-loader/patch',
          'webpack/hot/dev-server',
          'webpack-hot-middleware/client'
        ] : []),
        `${paths.src}/index.js`
      ]
    },
    output: {
      path: paths.public,
      publicPath: '/',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js'],
      modules: [
        paths.src,
        path.resolve('./node_modules')
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        }
      ]
    },
    plugins: getPlugins(),
    devtool: PROD ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: paths.public,
      historyApiFallback: true
    }
  }
};
