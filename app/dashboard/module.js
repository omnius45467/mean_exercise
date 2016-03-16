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
    let array = [
        ['tesflkft', 'hjahdkjahk', 'jflajfla'],
        ['tjkft', 'hjahdkjahk', 'jflajfla'],
        ['tslkft', 'hjkjahk', 'jfla'],
        ['8989kft', 'hjahdkjahk', 'jflajf8989la']
    ];

    this.message = array.forEach(function (a) {
        console.log(`ha ${a[0].split('l').reverse().join()}`);
        console.log(`auioad ${a[2].split('l').reverse().join()}`);
    });

}
