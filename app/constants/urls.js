'use strict';

/**
 * @ngdoc function
 * @name translationsApp.constant:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the translationsApp
 */
angular.module('translationsApp')

.constant('LOCAL_LOCALHOST', 'http://192.168.110.131/translations/')
/*.constant('LOCAL_LOCALHOST', 'http://192.168.1.5/translations/')*/
.constant('F1', {
                        main_url: 'http://ergast.com/api/f1/',
                        drivers: 'drivers.json',
                        circuits: 'circuits.json'
                    })
;