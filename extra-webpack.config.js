const webpack = require('webpack');
const pack = require('package.json');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": pack.version
        })
    ]
}