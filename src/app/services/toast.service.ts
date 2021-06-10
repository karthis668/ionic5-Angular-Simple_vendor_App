import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToast(message: any){
  	const toast = await this.toastController.create({
  		message,
  		duration:3000,
  		position:'bottom',
        mode :'ios',
		// color:'dark',
		cssClass:'toast'
  	});
  	toast.present();
  }

}
