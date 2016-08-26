'use strict';

angular.module('medsmindApp')
    .controller('MedicinesCtrl', function ($scope, $mdDialog, toastr, MedicinesService) {

        $scope.fnShowAdvanced = function (ev, medicine) {
            $mdDialog.show({
                controller: 'AddMedicineDialogController',
                templateUrl: 'app/medicines/dialog/addMedicine/addMedicine.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                resolve: {
                    medicine: function () {
                        return medicine;
                    }
                }
            }).then(function (answer) {
                $scope.fnGetMedicines();
            }, function () {

            });
        };

        $scope.fnGetMedicines = function () {
            MedicinesService.list()
                .then(function (res) {
                    $scope.medicines = res;
                });
        };

        $scope.fnDeleteMedicines = function (id) {
            MedicinesService.remove(id)
                .then(function () {
                    toastr.success('Medicine removed successfully.');
                    $scope.fnGetMedicines();
                }, function () {
                    toastr.error('Medicine not remove');
                })
        };

        $scope.fnInit = function () {
            $scope.fnGetMedicines();
        };
    });
