studentFormsApp.controller("homeController", 
    function ($scope, $location) {
        $scope.addNewStudent = function () {
            $location.path('/newStudentForm');
        };
        $scope.updateStudent = function (id) {
            $location.path('/updateStudentForm/'+ id);  /*Here we are passing id. For 'updateStudentForm' we need to add route in StudentFormsApp.js*/
        };
    })