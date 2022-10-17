const HtmlWebpack = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
            test:/\.html$/i,
            loader: `html-loader`,
            options: {
                sources: false,
            }
        },
        {
            test: /\.css$/,
                exclude: /style.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
        },
        {
            test: /style.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
              },
    
        }
    ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: `Mi webpack app`,
            filename: `index.html`,
            template: `./src/index.html`
        }),
        new MiniCssExtractPlugin ({
            filename: `[name].css`,
            ignoreOrder: false,
        }),
        new CopyPlugin ({
            patterns: [
                {from: `src/assets`, to: `assets/`}
            ]
        })
    ],

}