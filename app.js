/**
 * Created by mohit on 14-Nov-16.
 */
(function () {
    'use strict';
    
    angular.module('myFirstApp',[])
        .controller('myFirstController',function ($scope) {
            $scope.name="mohit";
            $scope.hellofunction=function () {
                return "hey this is a function ";
            }
        })
})();