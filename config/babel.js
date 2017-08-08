module.exports = function(paths) {
    return {
        module: {
            rules: [{
                test: /\.js$/, //Check for all js files
                loader: 'babel-loader',
                query: {
                    presets: ["babel-preset-es2015"].map(require.resolve)
                }
            }]
        }
    };
};