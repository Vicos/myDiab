define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home.html'
], function($, _, Backbone, HomeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $('#main'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },
        render: function() {
            var content = _.template(HomeTemplate, {});
            $(this.el).html(content);
        }
    });

    return HomeView;
});
