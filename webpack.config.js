const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	 entry: {
		  app: './src/index.js',
		  // print: './src/print.js',
	 },
	 output: {
		  filename: '[name].js',
		  path: path.resolve(__dirname, 'dist'),
		  publicPath: ''
	 },
	 devtool: 'inline-source-map',
	 mode: "development",
	 devServer: {
		  contentBase: './dist',
		  inline: true,
		  hot:true
	 },
	 module: {
		  rules: [
				{
					 test: /\.css$/,
					 use: [
						  'style-loader',
						  'css-loader'
					 ]
				},
				//处理图片
				{
					 test: /\.(png|svg|jpg|gif)$/,
					 use: ['file-loader']
				}
		  ]
	 },
	 plugins: [
		  new CleanWebpackPlugin(),
		  new HtmlWebpackPlugin({
				title:'webpack 学习',
				filename: 'index.html',
				template: 'index.html',
				inject: true
		  }),

	 ],
};