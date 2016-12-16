'use strict';

/**
 * @ngdoc function
 * @name translationsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the translationsApp
 */
angular.module('translationsApp')
  .controller('TranslationsCtrl', function ($scope, $routeParams, translationsService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('Tranlations: ' + $routeParams.id);

    //Show select APP Translate Text in second page with 6 results per page (dinamic)
    translationsService.getSelectAppTranslateTexts($routeParams.id, 1, 15)
            .then(function(data) {

           $scope.translationsTexts = data.data;
           console.log($scope.translationsTexts);
    });
  });
