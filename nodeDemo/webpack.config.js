var path = require('path');
var ExtractTextPath = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var config = {
	entry: {
		main: './main'
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPath.extract({
							use: 'css-loader',
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPath.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPath("main.css"),new VueLoaderPlugin()
	]
};
module.exports = config;