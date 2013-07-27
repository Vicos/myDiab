define([
    'async!https://apis.google.com/js/client.js'
], function(local_gapi) { // FIXME: (local_gapi == undefined)
    var GMan = {
        clientId: '360100413447.apps.googleusercontent.com',
        apiKey: 'AIzaSyDJYiFUY-Bib0a0GxJFcsw8JKHe22OgkN0',
        scopes: 'https://www.googleapis.com/auth/fusiontables https://www.googleapis.com/auth/fusiontables.readonly',
        isAuth: false,

        auth: function() {
            gapi.auth.authorize({
                client_id: this.clientId,
                scope: this.scopes
            }, function(result) {
                if (result && !result.error) {
                    console.log('Gman: auth successfully');
                    this.isAuth = true;
                }
                else {
                    console.error('Gman: auth failed');
                    this.isAuth = false;
                }
            });
        },
        getGFusion: function() {
            if (isAuth === true) {
                return gapi.client.fusiontables;
            }
            else {
                return null;
            }
        }
    };

    gapi.client.setApiKey(GMan.apiKey);
    gapi.client.load('fusiontables', 'v1');
    gapi.auth.init();
    return GMan;
});
