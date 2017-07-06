var path = require('path');
var webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, './src/index.jsx');
const BABELRC = path.resolve(ROOT_PATH, '.babelrc');
const BABELLOADER = 'babel-loader?cacheDirectory&extends=' + BABELRC;


module.exports = {
	entry: APP_PATH,
  	output: {
    	path: path.resolve(__dirname, './build'), // 输出文件的保存路径
        filename: 'bundle.js' // 输出文件的名称
    },

    module: {
	    loaders: [
	    		{test: /src\/.+\.js(x)$/, loader: 'react-proxy-loader', exclude: /node_modules|\.node_cache|ServerUnavailablePage/ },
	    		{test: /\.jsx?$/,loaders: BABELLOADER, exclude: /node_modules/},
	    		{test: /\.css$/,loader: 'style-loader!css-loader',exclude: /node_modules/}
	    ]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    //new webpack.NoErrorsPlugin(),
	    new webpack.LoaderOptionsPlugin({
		    options: {
		      postcss: function () {
		        return [precss, autoprefixer];
		      },
		      devServer: {
		          historyApiFallback:true,
		          hot:true,
		          inline:true,
		          progress:true
		      }
		    }
	  	})
	]
};