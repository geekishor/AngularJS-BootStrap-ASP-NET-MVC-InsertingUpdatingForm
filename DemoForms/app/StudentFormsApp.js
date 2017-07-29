var studentFormsApp = angular.module('studentFormsApp', ["ngRoute"]);

studentFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "homeController"
    })
    .when("/newStudentForm", {
        templateUrl: "app/StudentForm/sfTemplate.html",
        controller: "sfController"
    })
    .when("/updateStudentForm/:id", {
        templateUrl: "app/StudentForm/sfTemplate.html",
        controller: "sfController"
    })
    .otherwise({
        redirectTo: "/home"
    })
});
