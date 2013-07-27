define([
    'jquery',
    'backbone',
    'router'
], function($, Backbone, Router) {
    var initialize = function(){
        Router.initialize();
    };

    return { initialize: initialize };
});
