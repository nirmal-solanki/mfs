'use strict';

angular.module('medsmindApp')
    .controller('AddMedicineDialogController', function ($scope, $mdDialog, MedicinesService) {
        $scope.fnCloseDialog = function () {
            $mdDialog.hide();
        };

        $scope.fnAddMedicine = function (medicine) {
            MedicinesService.addMedicines(medicine)
                .then(function () {
                    console.log('work');
                    $mdDialog.hide();
                });
        };
    });
