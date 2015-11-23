module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/font-woff' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=image/svg+xml' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/octet-stream' }
        ]
    },
    resolve: {
        alias: {
            'jquery': '../node_modules/jquery/dist/jquery.min.js',
            'bootstrap-js': '../node_modules/bootstrap/dist/js/bootstrap.min.js',
            'bootstrap-css': '../node_modules/bootstrap/dist/css/bootstrap.min.css',
            'font-awesome': '../node_modules/font-awesome/css/font-awesome.min.css'
        }
    }
};
