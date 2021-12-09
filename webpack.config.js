const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
      open: true,
      hot: true,
      port: 8080,
      contentBase: path.join(__dirname, 'public'),
    },
  };

module.exports = ({development}) => ({
    mode : development ? 'development' : 'production',
    entry: path.resolve(__dirname, './src/index.ts'),
    // mode: 'development',
    devtool: development ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(?:svg)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }    
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    ...devServer(development)
});