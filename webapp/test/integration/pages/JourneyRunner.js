sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"rewe/bc/zbcccmdashboard/test/integration/pages/DashboardList",
	"rewe/bc/zbcccmdashboard/test/integration/pages/DashboardObjectPage",
	"rewe/bc/zbcccmdashboard/test/integration/pages/ScoresObjectPage"
], function (JourneyRunner, DashboardList, DashboardObjectPage, ScoresObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('rewe/bc/zbcccmdashboard') + '/test/flp.html#app-preview',
        pages: {
			onTheDashboardList: DashboardList,
			onTheDashboardObjectPage: DashboardObjectPage,
			onTheScoresObjectPage: ScoresObjectPage
        },
        async: true
    });

    return runner;
});

