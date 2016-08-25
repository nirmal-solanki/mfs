'use strict';

angular.module('medsmindApp')
    .controller('AddMedicineDialogController', function ($scope, $mdDialog, toastr, MedicinesService) {
        $scope.fnCloseDialog = function () {
            $mdDialog.hide();
        };

        $scope.fnAddMedicine = function (medicine) {
            MedicinesService.addMedicines(medicine)
                .then(function () {
                    toastr.success('Medicine Added Successfully.');
                    $mdDialog.hide();
                }, function(){
                    toastr.error('Medicine not Add');
                    $mdDialog.hide();
                });
        };
    });
