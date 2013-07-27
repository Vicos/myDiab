define([
    'jquery',
    'underscore',
    'backbone',
    'gman'
], function($, _, Backbone, GMan) {
    var HomeView = Backbone.View.extend({
        el: $('#main'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },
        render: function() {
            $(this.el).append('<div>Hello World!</div>');
        }
    });

    return HomeView;
});
