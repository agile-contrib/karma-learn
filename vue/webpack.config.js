const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            loader: "babel-loader"
        }, {
            test: /\.(css|scss)$/,
            use: ['vue-style-loader', 'css-loader']
        }]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};