"use strict";
var router_1 = require('@angular/router');
var customers_component_1 = require('./customers.component');
var customers_card_component_1 = require('./customers-card.component');
var customers_grid_component_1 = require('./customers-grid.component');
var filterTextbox_component_1 = require('../filterTextbox/filterTextbox.component');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers', component: customers_component_1.CustomersComponent }
];
exports.customersRouting = {
    routes: router_1.RouterModule.forChild(routes),
    components: [customers_component_1.CustomersComponent, customers_card_component_1.CustomersCardComponent, customers_grid_component_1.CustomersGridComponent, filterTextbox_component_1.FilterTextboxComponent]
};
//# sourceMappingURL=customers.routing.js.map