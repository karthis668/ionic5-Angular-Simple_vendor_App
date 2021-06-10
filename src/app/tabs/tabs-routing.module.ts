import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../productslist/productslist.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'addproduct',
        loadChildren: () => import('../addProduct/addProduct.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../order/order.module').then( m => m.OrderPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('../transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
