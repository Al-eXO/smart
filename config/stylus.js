const path = require('path');
module.exports = function(paths) {
    return {
        module: {
            rules: [{
                test: /\.styl$/,
                include: paths,
                exclude: path.resolve(__dirname, 'src/assets'),
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'stylus-loader'
                ]
            }]
        }
    };
};