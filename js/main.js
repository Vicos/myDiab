require.config({
    paths: {
        async: 'vendor/require.async',
        text: 'vendor/require.text',
        jquery: 'vendor/jquery-1.10.1.min',
        underscore: 'vendor/underscore-min',
        backbone: 'vendor/backbone',
        bootstrap: 'vendor/bootstrap.min'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require([
    'app'
], function(App) {
    App.initialize();
});
