studentFormsApp.controller('sfController',
    function sfController($scope, $window, $routeParams, sfService) {
        if ($routeParams.id) {
            $scope.student = sfService.getStudent($routeParams.id);
        }
        else {
            $scope.student = { id: 0 };
        }


        $scope.updatedStudent = angular.copy($scope.student);

        $scope.departments = [
               "Math",
               "Physics",
               "Chemistry",
               "English"
        ];
        $scope.submitForm = function () {
            if ($scope.updatedStudent.id == 0) {
                //insert new student data
                sfService.insertStudent($scope.updatedStudent);
            }
            else {
                //update the student data
                sfService.updateStudent($scope.updatedStudent);
            }

            $scope.student = angular.copy($scope.updatedStudent);
            $window.history.back();
        }
        $scope.cancelForm = function () {
            $window.history.back();
        }
    });