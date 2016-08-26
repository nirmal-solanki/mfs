'use strict';

angular.module('medsmindApp')
    .controller('AddMedicineDialogController', function ($scope, $mdDialog, toastr, medicine, MedicinesService) {

        $scope.medicine = medicine;

        $scope.fnCloseDialog = function () {
            $mdDialog.hide();
        };

        $scope.fnAddMedicine = function (medicine) {
            if(medicine._id) {
                MedicinesService.update(medicine)
                    .then(function () {
                        toastr.success('Medicine updated successfully.');
                        $mdDialog.hide();
                    }, function(){
                        toastr.error('Medicine not update');
                        $mdDialog.hide();
                    });
            } else {
                MedicinesService.add(medicine)
                    .then(function () {
                        toastr.success('Medicine added successfully.');
                        $mdDialog.hide();
                    }, function(){
                        toastr.error('Medicine not add');
                        $mdDialog.hide();
                    });
            }
        };
    });
