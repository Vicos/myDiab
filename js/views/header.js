define([
    'jquery',
    'underscore',
    'backbone',
    'gman',
    'text!templates/header.html'
], function($, _, Backbone, GMan, headerTemplate) {
    var HomeView = Backbone.View.extend({
        el: $('#header'),

        events: {
            "click #loginButton": "login"
        },

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
            var content = _.template(headerTemplate, {
                links: {}
            });
            $(this.el).html(content);
        },
        login: function(event) {
            GMan.auth();
        }
    });

    return HomeView;
});
