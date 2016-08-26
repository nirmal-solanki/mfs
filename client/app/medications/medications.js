'use strict';

angular.module('medsmindApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('medications', {
                url: '/medications',
                templateUrl: 'app/medications/medications.html',
                controller: 'MedicationsCtrl',
                authenticate: true
            });
    });
