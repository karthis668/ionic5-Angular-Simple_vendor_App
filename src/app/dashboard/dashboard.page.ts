import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class Tab1Page {
  sellerInfo: any[];

  constructor() {
    this.sellerInfo = [
      {
      id: 1, name: 'Tony',
      description:'Test Description',
      sourcecode:'CD123456',
      status:'Active',
      lifetimesales:'150000.00',
      created:'2011-10-05T14:48:00.000Z',
      pendingamount:'45000.00'},
  ];
  }

}
