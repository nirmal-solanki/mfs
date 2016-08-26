'use strict';

angular.module('medsmindApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('medicines', {
                url: '/medicines',
                templateUrl: 'app/medicines/medicines.html',
                controller: 'MedicinesCtrl',
                authenticate: true
            });
    });
