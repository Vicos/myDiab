define([
    'jquery',
    'underscore',
    'backbone',
    'collections/gtables',
    'text!templates/home.html'
], function($, _, Backbone, GTables, HomeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $('#main'),
        gtables: new GTables(),

        initialize: function() {
            _.bindAll(this, 'render');
            this.gtables.bind("change reset add remove", this.render, this);
            this.render();
        },
        render: function() {
            var content = _.template(HomeTemplate, {
                tables: this.gtables.models
            });
            $(this.el).html(content);
        }
    });

    return HomeView;
});
