define([
    'jquery',
    'underscore',
    'backbone',
    'models/gman',
    'models/gtable'
], function($, _, Backbone, GMan, GTable) {
    var GTables = Backbone.Collection.extend({
        model: GTable,
        gman: new GMan(),

        initialize: function() {
            _.bindAll(this, 'refresh', 'sync');
            this.gman.bind('change:isAuth', this.refresh);
        },
        refresh: function() {
            this.fetch();
        },
        sync: function(method, model, options) {
            options = options || {};
            if (this.gman.get('isAuth')){
                switch(method) {
                    case 'read':
                        var r = this.gman.get('fusionTables').table.list();
                        r.execute(function(resp) {
                            if (resp.error) {
                                if (options.error)
                                    options.error(resp);
                            }
                            else if (options.success) {
                                options.success(resp.items, true, r);
                            }
                        });
                        break;
                    case 'create':
                    case 'update':
                    case 'delete':
                        throw 'unsupported method';
                }
            }
        }
    });

    return GTables;
});
