import { Component } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: 'productslist.page.html',
  styleUrls: ['productslist.page.scss']
})
export class Tab2Page {
  productslist: any[];

  constructor() {
    this.productslist = [
      {
        name :'Aroma Designers',
        sku  :'S360-0001',
        qty  :'500',
        cost :'50.00'
      },
      {
        name :'Aroma Designer Candles',
        sku  :'S360-0002',
        qty  :'500',
        cost :'50.00'
      },
      {
        name :'Aroma Designers-1',
        sku  :'S360-0003',
        qty  :'500',
        cost :'50.00'
      }
    ];
  }

  statusChange(ev: any){
    console.log(ev);
  }

}
