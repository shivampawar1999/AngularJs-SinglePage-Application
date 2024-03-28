var app = angular.module("myMod", ['ngRoute']);

app.config(["$routeProvider",function($routeProvider){

    $routeProvider.
    when("/Teacher",{templateUrl:"views/Teacher.html", controller:"TeacherController"}).
    when("/Student",{templateUrl:"views/Student.html", controller:"StudentController"}).
    when("/Courses",{templateUrl:"views/Courses.html", controller:"CoursesController"}).
    when("/gallery",{templateUrl:"views/gallery.html", controller:"galleryController"}).
    otherwise({redirectTo:"index.html"});

}]);

app.controller("TeacherController", function ($scope , $location , $interval, $timeout , $window) {
    //$scope == model bol sakte hai
    $scope.teachers = [
        {name:"SBP", age:35, qualification:"PHD"},
        {name:"MNP", age:33, qualification:"MD"},
        {name:"KD", age:30, qualification:"ED"},
        {name:"Hetal", age:32, qualification:"PHD"},

    ];
   
});

app.controller("StudentController", function ($scope , $location , $interval, $timeout , $window) {
    //$scope == model bol sakte hai

    $scope.student = ["Shivam", "Hardik", "Bhargav", "Vrajesh", "Rahul", "Virat", "Dhoni", "Sachin"];
    
   
});

app.controller("CoursesController", function ($scope , $location , $interval, $timeout , $window) {
    //$scope == model bol sakte hai
    $scope.Cources = ["Java", "PHP", "Python", "dotnet", "DevOps", "ML","AI","Web Designing" ];
    
   
});

app.controller("galleryController", function ($scope , $location , $interval, $timeout , $window) {
    //$scope == model bol sakte hai

    $scope.pic1 = "images/images1.jpeg";
    $scope.pic2 = "images/images2.jpeg";
    $scope.pic3 = "images/images3.jpeg";
 
});