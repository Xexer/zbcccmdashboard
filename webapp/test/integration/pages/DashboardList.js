sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'rewe.bc.zbcccmdashboard',
            componentId: 'DashboardList',
            contextPath: '/Dashboard'
        },
        CustomPageDefinitions
    );
});