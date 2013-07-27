define([
    'jquery',
    'backbone',
    'views/home'
], function($, Backbone, HomeView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome', // main route
            '*path': 'otherRoute' // other route
        },

        showHome: function() {
            var homeView = new HomeView();
            homeView.render();
        },
        otherRoute: function(path) {
            console.log('no route:', path);
        }
    });

    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start();
    };

    return { initialize: initialize };
});
