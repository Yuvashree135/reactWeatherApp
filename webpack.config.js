module.exports = {
	entry: './main.jsx',
	output: {
		path: __dirname+'/dist',
		filename: 'index.js'
	},
	devServer:{
		host: 'jyothi-prakriya',
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015','react']
				}
			}
		]
	}
}
