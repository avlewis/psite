const path = require("path");

module.exports = { 
    mode: "development",
    output: {
        path: path.resolve(__dirname, "public"),
        library: 'EntryPoint'

    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader', 
                'css-loader',
                'postcss-loader'
                ],
            }
        ]
        
    }
}