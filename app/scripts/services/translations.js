'use strict';

angular.module('translationsApp')

  .service('translationsService', function translationsService($http, LOCAL_LOCALHOST) {
    return {
      getAppList: function() {

        var url = LOCAL_LOCALHOST + 'get/apps.php';
        console.log('URL: '+ url);

        return $http.get(url)
		    .then(function(response) {
		        return response;
		    });
       
      },
      getSelectAppInfo: function(id) {

        var url = LOCAL_LOCALHOST + 'get/apps.php?id=' + id;
        console.log('URL: '+ url);

        return $http.get(url)
		    .then(function(response) {
		        return response;
		    });
       
      },
      getSelectAppTranslateTexts: function(id, page, itemsPerPage) {

        var url = LOCAL_LOCALHOST + 'get/translations_on_select_app.php?id=' + id + '&page='+ page + '&limit=' + itemsPerPage;
        console.log('URL: '+ url);

        return $http.get(url)
		    .then(function(response) {
		        return response;
		    });
       
      },

    };
  });