'use strict';

angular.module('medsmindApp')
    .factory('MedicinesService', function ($http, $q) {

        // Public API here
        return {
            getMedicines: function () {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.get('/api/medicines')
                    .then(function (result) {

                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            },
            addMedicines: function (medicineObj) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.post('/api/medicines', medicineObj)
                    .then(function (result) {
                        deferred.resolve(result);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            }

        };
    });
