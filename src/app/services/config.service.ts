import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';



@Injectable({providedIn:'root'})

export class ConfigService{

  private configSubject$ = new ReplaySubject<any>(1)
  config$ = this.configSubject$.asObservable();
  configUrl:string = ''
  constructor(private http:HttpClient){
  }

  loadConfig(){
    return this.http.get<any>('../../assets/enviroments/config.json')
  }

  getConfigUrl(){
    return this.configUrl;
  }

}
