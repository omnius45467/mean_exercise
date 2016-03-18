angular.module('dashboard', []);



angular.module('dashboard')
    .controller('DashboardCtrl', DashboardCtrl)
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl',
                templateUrl: 'dashboard/dashboard.html',
                controllerAs: 'dashboard'
            });
    });

function DashboardCtrl() {


}
