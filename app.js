/**
 * Created by mohit on 14-Nov-16.
 */
(function () {
    'use strict';
    
    angular.module('myFirstApp',[])
        .controller('myFirstController',function ($scope) {
            $scope.name="";
            $scope.hellofunction=function () {
                return "hey this is a function ";
            };
            $scope.totalvalue=0;
            $scope.calculate=function () {
              var newval=changemyval($scope.name);
             $scope.totalvalue=newval;   
            };
            function changemyval(mystr) {
                var newtot=0;
                for(var i=0;i<mystr.length;i++)
                {
                    newtot+=(mystr.charCodeAt(i));
                }
                return newtot;
            }
        })
})();