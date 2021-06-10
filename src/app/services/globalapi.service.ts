import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalapiService {
  apiUrl = 'https://aryasamajapi.kappa.websitestore.in/';

  constructor() { }
}
