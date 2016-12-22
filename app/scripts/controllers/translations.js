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
    console.log('Current Page: ' + $routeParams.page);

    $scope.itemsPerPage = 15;

    if ($routeParams.page === undefined)
    { 
      $scope.currentPage = 1;
    }
    else if ($routeParams.page === 0)
    {
      $scope.currentPage = 1;
    }
    else{ $scope.currentPage = $routeParams.page;}

    console.log('Current page after if: ' + $scope.currentPage);

    //Show select APP Translate Text in second page with 6 results per page (dinamic)
    translationsService.getSelectAppTranslateTexts($routeParams.id, $scope.currentPage, $scope.itemsPerPage )
            .then(function(data) {

        $scope.translationsTexts = data.data;
        //if ($scope.translationsTexts.length() === 0)

        $scope.containData = false;
        console.log($scope.translationsTexts);
        $scope.mainData = $scope.translationsTexts[0];
        console.log($scope.mainData.log_message);
        if ($scope.mainData.log_message == "Select page not exist. Max value to select page is 0")
        {
          alert("Not data to select app");
        }
        else
        {
          $scope.containData = true;
          $scope.translationsTexts.splice(0, 1);
          console.log($scope.mainData);
          console.log($scope.translationsTexts);
          $scope.totalPages = [];
          for (var page = 1; page <= $scope.mainData.total_pages; page++)
          {
            $scope.totalPages.push(page);
          }
        }
        

    });
  });
