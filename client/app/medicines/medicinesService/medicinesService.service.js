'use strict';

angular.module('medsmindApp')
    .factory('MedicinesService', function ($http, $q) {

        // Public API here
        return {
            list: function () {

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

            add: function (medicineObj) {

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

            },

            update: function (medicineObj) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.put('/api/medicines/'+medicineObj._id, medicineObj)
                    .then(function (result) {
                        deferred.resolve(result);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            },

            remove: function (id) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.delete('/api/medicines/'+id)
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
