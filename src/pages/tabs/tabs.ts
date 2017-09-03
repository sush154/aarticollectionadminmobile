import { Component } from '@angular/core';

import { OrdersPage } from '../orders/orders';
import { ProductsPage } from '../products/products';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Dashboard;
  tab2Root = ProductsPage;
  tab3Root = OrdersPage;

  constructor() {

  }
}
