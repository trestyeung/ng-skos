var cocodaDemo = angular.module('cocodaDemo', ['ngSKOS','jsonText','ui.bootstrap']);

function myController($scope, SkosConceptProvider) {

    var rvkProvider = new SkosConceptProvider({
        url:'data/rvk/{notation}.json',
        jsonp: false
    });

    /*
    $scope.safeApply = function(fn) { 
        var phase = this.$root.$$phase; 
        if(phase == '$apply' || phase == '$digest') { if(fn) fn(); } else { this.$apply(fn); } };
    */

    $scope.sampleConcept = { notation: ['UN'] };
    rvkProvider.updateConcept($scope.sampleConcept);
    
    $scope.currentMapping = {
        from: [],
        to: [],
    }
    $scope.insertMapping = function(mapping){
        $scope.currentMapping = mapping;
    }
}

cocodaDemo.run(function($rootScope,$http) {

    $rootScope.mappingSample = {};
    $http.get('data/mapping-1.json').success(function(data){
        $rootScope.mappingSample = data;
	});

	$rootScope.occurrencesSample = {};
    $http.get('data/occurrences-1.json').success(function(data){
        $rootScope.occurrencesSample = data;
    });

    $rootScope.treeSample = {};
	$http.get('data/tree-1.json').success(function(data){
        $rootScope.treeSample = data;
	});

    $rootScope.searchSample = {
        // TODO
    };

});
cocodaDemo.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
}).controller('MainCtrl', function ($$rootScope, $location) { });