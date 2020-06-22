
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {

    $scope.standard_ledar_buttons = [

        {
            class: 'btn btn-primary',
            name: 'Primary'
        },
        {
            class: 'btn btn-secondary',
            name: 'Secondary'
        },
        {
            class: 'btn btn-success',
            name: 'Success'
        },
        {
            class: 'btn btn-danger',
            name: 'Danger'
        },
        {
            class: 'btn btn-warning',
            name: 'Warning'
        },
        {
            class: 'btn btn-info',
            name: 'Info'
        },
        {
            class: 'btn btn-light',
            name: 'Light'
        },
        {
            class: 'btn btn-dark',
            name: 'Dark'
        }

    ]

});
