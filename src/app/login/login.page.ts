import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../app/services/api.service';
import { ToastService } from '../services/toast.service';
import { NavController } from '@ionic/angular';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;
  loginData: any;
  userData: any;
  // @Output() user_Role_admin = new EventEmitter<string>() ;


  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private auth: AuthService,
    private loadingController: LoadingController,
    private http: HttpClient,
    // public  loading: LoadingService,
    public apiservice: ApiService,
    public toast: ToastService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }




  login() {
    console.log(this.credentials.value.password);
    // this.loading.present();

    // this.auth.login(this.credentials.value.phone,this.credentials.value.password).subscribe(data =>{
    //   console.log(data);
    //   this.loginData = data;
    //   this.userData  = this.loginData.user;
    //   localStorage.setItem('user_token',this.loginData.token);
    //   localStorage.setItem('user_role',this.userData.role);
    //   localStorage.setItem('user_id',this.userData.id);
    //   localStorage.setItem('user_name',this.userData.name);
    //   localStorage.setItem('user_email',this.userData.email);
    //   localStorage.setItem('user_phone',this.userData.phone);
    //   // const user_hdata = this.loginData.detail;
    //   // console.log(user_hdata);
    //   console.log(localStorage.getItem('user_name'));
    //   const role = localStorage.getItem('user_role');
    // });
  }

  get errorControl() {
    return this.credentials.controls;
  }




}
