const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        host: 'localhost',
        port: 9998,
        hot: true,
    },
    entry: path.resolve(__dirname,'./src/app.js'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.htm(l)?$/,
                use: [
                    'html-loader',
                    {
                        loader: 'word-replace-loader',
                        options: {
                            word: 'title',
                            replace: '替换title文案'
                        }
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        modules: [path.resolve(__dirname,'./loader'),'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'./src/index.html')
        }),
        new HotModuleReplacementPlugin()
    ]
}
