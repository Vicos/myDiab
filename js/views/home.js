define([
    'jquery',
    'underscore',
    'backbone',
    'gman'
], function($, _, Backbone, GMan) {
    var HomeView = Backbone.View.extend({
        el: $('#main'),

        events: {
            "click #login": "login"
        },

        initialize: function() {
            _.bindAll(this, 'render');
        },

        render: function() {
            $(this.el).append('<button id="login">Login</button>');
        },
        login: function(event) {
            GMan.auth();
        }
    });

    return HomeView;
});
