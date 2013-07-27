define([
    'jquery',
    'underscore',
    'backbone',
    'async!https://apis.google.com/js/client.js'
], function($, _, Backbone, local_gapi) { // FIXME: (local_gapi == undefined)
    var GMan = Backbone.Model.extend({
        defaults: {
            'clientId': '360100413447.apps.googleusercontent.com',
            'apiKey': 'AIzaSyDJYiFUY-Bib0a0GxJFcsw8JKHe22OgkN0',
            'scopes': 'https://www.googleapis.com/auth/fusiontables https://www.googleapis.com/auth/fusiontables.readonly',
            'isAuth': false,
            'fusionTables': gapi.client.fusiontables
        },
        auth: function() {
            var self = this;
            gapi.auth.authorize({
                client_id: this.get('clientId'),
                scope: this.get('scopes')
            }, function(result) {
                if (result && !result.error) {
                    console.log('Gman: auth successfully');
                    self.set({'isAuth': true});
                }
                else {
                    console.error('Gman: auth failed');
                    self.set({'isAuth': false});
                }
            });
        }
    });

    // gAPI global initialisation
    gapi.client.setApiKey(GMan.apiKey);
    gapi.client.load('fusiontables', 'v1');
    gapi.auth.init();

    return GMan;
});
