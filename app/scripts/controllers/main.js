'use strict';

/**
 * @ngdoc function
 * @name translationsApp.controller:MainCtrl
 * @description: In this controller get Data About all apps items and show to manage different actions
 * # MainCtrl
 * Controller of the translationsApp
 */
angular.module('translationsApp')
  .controller('MainCtrl', function ($scope, translationsService) {
    

	//Show Translate APPs List Info
    translationsService.getAppList()
            .then(function(data) {

           console.log(data);
           $scope.apps = data.data;
           console.log($scope.apps);
    });

    //Show select APP Info       
    translationsService.getSelectAppInfo('com.amugika.servirace')
            .then(function(data) {

           console.log(data);
    });

    //Show select APP Translate Text in second page with 6 results per page (dinamic)
    translationsService.getSelectAppTranslateTexts('com.amugika.servirace', 2, 6)
            .then(function(data) {

           console.log(data);
    });
  });
