module.exports = function(paths) {
    return {
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            "presets": "es2015"
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }]
        }
    };
};