
App.factory('Links', function($rootScope, $sbhttp, Url) {

    var factory = {};

    factory.value_id = null;

    factory.find = function() {

        if(!this.value_id) return;

        return $sbhttp({
            method: 'GET',
            url: Url.get("weblink/mobile_multi/find", {value_id: this.value_id}),
            cache: !$rootScope.isOverview,
            responseType:'json'
        });
    };

    return factory;
});
