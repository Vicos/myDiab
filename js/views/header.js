define([
    'jquery',
    'underscore',
    'backbone',
    'models/gman',
    'text!templates/header.html'
], function($, _, Backbone, GMan, headerTemplate) {
    var HomeView = Backbone.View.extend({
        el: $('#header'),
        gman: new GMan(),
        events: {
            "click #loginButton": "login"
        },

        initialize: function() {
            _.bindAll(this, 'render');
            this.gman.bind('change:isAuth', this.render);
            this.render();
        },
        render: function() {
            var content = _.template(headerTemplate, {
                links: {}
            });
            $(this.el).html(content);

            if (this.gman.get('isAuth')) {
                $('#loginButton', this.el).addClass('hidden');
                $('#connectedText', this.el).removeClass('hidden');
            }
            else {
                $('#loginButton', this.el).removeClass('hidden');
                $('#connectedText', this.el).addClass('hidden');
            }
        },
        login: function(event) {
            this.gman.auth();
        }
    });

    return HomeView;
});
