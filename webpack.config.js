var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =
{

entry: './src/js/todo-correct',
output: {

	path: __dirname,
	filename:'dist/js/bundle-es5.js'


},
	watch:true,
	



	module:{

		rules:[

		{
			test:/\.js$/,
			exclude:/node_modules/,
			use:{
			
				loader:'babel-loader',
				options:{
					presets:[ 'env' ,'stage-3']
			
				} //  wwe can write but npm auto load all in env['babel-preset-es2015','es2016','es2017']   //we can just write es2015
			
			}//
		},
		{
			test:/\.scss$/,
			use:   ExtractTextPlugin.extract({

				use: [

				{
					loader:'css-loader',

					options:{

						url:false

					}
				},

					'sass-loader'
					]




			})





		}

					

	]

	
	}
	,
	
	plugins: [


		new webpack.ProvidePlugin({

			'$':'jquery',
			'jQuery':'jquery'



		}),

		new ExtractTextPlugin({

				filename: ./dist/css/styles.css'

		})


	]




}