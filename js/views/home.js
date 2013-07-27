define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var HomeView = Backbone.View.extend({
        el: $('body'),

        initialize: function() {
            _.bindAll(this, 'render');
        },

        render: function() {
            $(this.el).append('<div>Hello World!</div>');
        }
    });

    return HomeView;
});