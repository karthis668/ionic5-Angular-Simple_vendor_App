import { Injectable } from '@angular/core';
import { GlobalapiService } from '../services/globalapi.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  globalApi: string;

  constructor(
    private globals: GlobalapiService,
    private http: HttpClient
  ) {
    this.globalApi = this.globals.apiUrl;
  }

  login(data) {
    return this.http.post(this.globalApi +'login',data);
  }

   // zoho customer registration
   register(data){
    return this.http.post(this.globalApi +'register',data);
  }




}
