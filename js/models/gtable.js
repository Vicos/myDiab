define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var GTable = Backbone.Model.extend({
        defaults: {
            'name': null,
            'tableId': null,
            'kind': 'fusiontables#table',
            'isExportable': false,
            columns: []
        },

        initialize: function(attrs, options) {
            console.log('Gtable initialized');
        }
    });

    return GTable;
});
