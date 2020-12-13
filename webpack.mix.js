const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    postCss: [
        require('autoprefixer'),
    ],
});
mix.setPublicPath('public');

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': __dirname + 'resources'
        }
    },
    output: {
        chunkFilename: 'js/chunks/[name].js',
    },
});

// used to run app using reactjs
mix.js('resources/coreui/src/index.js', 'public/js/app.js').version();
mix.copy('resources/coreui/public/avatars', 'public/avatars');
mix.copy('resources/coreui/public/favicon.ico', 'public/favicon.ico');
mix.browserSync('127.0.0.1:8000');
