'use strict';

angular.module('medsmindApp')
    .controller('SettingsCtrl', function ($scope, User, Auth, toastr) {
        $scope.errors = {};

        $scope.changePassword = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                    .then(function () {
                        toastr.success('Password successfully changed.');
                    })
                    .catch(function () {
                        toastr.error('Incorrect password');
                    });
            }
        };
    });
