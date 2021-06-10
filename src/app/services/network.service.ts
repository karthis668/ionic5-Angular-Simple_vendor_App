/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Network } from '@capacitor/network';



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

 status: any;
  networkstatusnow: any ;
   listener: any;
   constructor(
     private alert: AlertController,
     private toastCtrl: ToastController,
     // private events        : Events,
     ) { }


   async getStatus() {
       this.status = await Network.getStatus();
       if(this.status.connected == false){
         this.networkstatusnow = 'ofline';
         this.presentAlert('Please Check Your Internet');
         localStorage.networkstatusnow = this.networkstatusnow;
         // console.log(localStorage['networkstatusnow']);
       }
       else if(this.status.connected == true){
         this.networkstatusnow = 'online';
         localStorage.networkstatusnow = this.networkstatusnow;
         console.log(localStorage.networkstatusnow);
       }
   }

   startListenNetwork() {
     this.listener = Network.addListener('networkStatusChange', (status) => {
       console.log(status);
       if (!status.connected) {
         this.networkstatusnow = 'ofline';
          localStorage.networkstatusnow = this.networkstatusnow;
         console.log(localStorage.networkstatusnow);
         this.presentAlert('Your internet connection appears to be offline');
       }
       else{
          this.networkstatusnow = 'Online';
          localStorage.networkstatusnow = this.networkstatusnow;
         //  window.location.reload();
         console.log(localStorage.networkstatusnow);
       }
     });
   }

   stopListenNetwork() {
     if (this.listener){
       this.listener.remove();
     }
   }


   async presentAlert(msg) {
     console.log(localStorage.networkstatusnow);
     const alert = await this.alert.create({
       header: '',
       backdropDismiss:false,
       message: msg,
       buttons: [
          {
           text: 'Retry',
           handler: () => {
             if(this.networkstatusnow == 'Online'){
               window.location.reload();
             }
             else{
               this.presentAlert('Your internet connection appears to be offline');
             }
           }
         }
       ]
     });

     await alert.present();
   }

   async presentToast(msg) {
     const toast = await this.toastCtrl.create({
       message: msg + '<span *ngIf="msg == "Your internet connection appears to be offline""><ion-icon name="sad"></ion-icon></span>',
        duration: 3000,
        position: 'bottom'
       });

     toast.present();
   }

}
