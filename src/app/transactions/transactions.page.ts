import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transactionsList: any[];

  constructor() { }

  ngOnInit() {
    this.transactionsList = [
      {
        id:'1',
        amount:'500',
        createdat:'2011-10-05T14:48:00.000Z'
      },
      {
        id:'2',
        amount:'5000',
        createdat:'2011-10-05T14:48:00.000Z'
      },
      {
        id:'3',
        amount:'600',
        createdat:'2011-10-05T14:48:00.000Z'
      },
      {
        id:'4',
        amount:'800',
        createdat:'2011-10-05T14:48:00.000Z'
      }
    ];
  }

}
