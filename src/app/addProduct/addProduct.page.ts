/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NetworkService } from '../services/network.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: 'addProduct.page.html',
  styleUrls: ['addProduct.page.scss']
})
export class Tab3Page {

  addproductForm = new FormGroup({
    name: new FormControl(),
    shortDescription: new FormControl('11'),
    reference: new FormControl(),
    description: new FormControl(),
    weight: new FormControl(),
    price: new FormControl(),
    categoryId: new FormControl(),
    productType: new FormControl(),
    qty: new FormControl(),
    sku: new FormControl(),
    // reference: new FormControl(),
    // reference: new FormControl(),
    // reference: new FormControl(),
    // reference: new FormControl(),
    // reference: new FormControl(),

});

  constructor(
    private apiservice: ApiService,
    private alertService: ToastService,
    private internet: NetworkService,
  ) {}

  async addproduct() {
    const formValue = this.addproductForm.value;
    console.log(formValue);

    this.internet.getStatus();
    const addedProduct = {
      data: {
        sku: 'vfer34rde',
        name: 'Sasdewmsung cv50a ',
        description: 'check',
        'short description': 'shorter',
        weight: 1.1,
        category_id: '6',
        visibility: 1,
        price: 150000,
        url_key: 'samsunglite',
        qty: 10,
        product_type: 'simple'
      }
    };
    // this.apiservice.addProduct(addedProduct).subscribe(
    //   res => {
    //   },
    //     error => {
    //       this.internet.getStatus();
    //       // this.loadingService.dismiss();
    //       localStorage.isprofileUpdated = 'no';
    //       console.log(error);
    //       this.alertService.presentToast(error.error.messsage);
    //     });
  }

}
