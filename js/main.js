require.config({
    paths: {
        jquery: 'vendor/jquery-1.10.1.min',
        bootstrap: 'vendor/bootstrap.min',
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});
