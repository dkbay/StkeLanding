const path = require('path');
const webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		'vendor.js': './assets/js/vendor.js',
		'app.js': './assets/js/app.js',
		'vendor.css': './assets/sass/vendor.scss',
		'app.css': './assets/sass/app.scss',
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}, {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			}, {
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			}, {
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: "url-loader",
				options: {
					limit: 100000
				}
			}
		]
	},
	output: {
		filename: '[name]',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		modules: ['assets/bower'],
		alias: {
			jquery: "jquery/src/jquery",
			'popper.js': "popper.js/dist/umd/popper.js"
		}
	},
	plugins: [
		new ExtractTextPlugin("[name]")
	]
};
