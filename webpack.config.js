const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}, 
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {sourceMap: true}
					},
					// {
					// 	loader: "postcss-loader",
					// 	options: {sourceMap: true, config: { path: 'src/js/postcss.config.js'}}
					// },
					{
						loader: "sass-loader",
						options: {sourceMap: true}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {sourceMap: true}
					},
				]
			},
			{
				test: /\.pug$/,
				loaders: [
					{
						loader: "html-loader"
					},
					{
						loader: "pug-html-loader",
						options: {
							"pretty":true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'img'
				}
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		writeToDisk: true,
		port: 9000
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: './src/pages/main.pug'
		}),
	]
}