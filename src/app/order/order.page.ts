import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  ordersList: any[];

  constructor() { }

  ngOnInit() {
    this.ordersList = [
      {
        id:'1456464644',
        date:'2011-10-05T14:48:00.000Z',
        orderedby:'Tony',
        shipto:'Test Address',
        statuslabel:'Pending',
        total:'500.00'
      },
      {
        id:'1456464644',
        date:'2011-10-05T14:48:00.000Z',
        orderedby:'Stark',
        shipto:'Test Address',
        statuslabel:'Pending',
        total:'600.00'
      }
    ];
  }

}
