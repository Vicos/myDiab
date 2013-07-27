define([
    'jquery',
    'backbone',
    'views/header',
    'views/home'
], function($, Backbone, HeaderView, HomeView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome', // main route
            '*path': 'otherRoute' // other route
        },

        showHome: function() {
            var homeView = new HomeView();
        },
        otherRoute: function(path) {
            console.log('no route:', path);
        }
    });

    var initialize = function() {
        var router = new AppRouter();
        var header = new HeaderView();
        Backbone.history.start();
    };

    return { initialize: initialize };
});
