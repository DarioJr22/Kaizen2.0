import { Injectable } from "@angular/core";
import { APIService } from "./core.service";
import { Observable, Subject } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({providedIn:'root'})

export class GenericService<T>{

  //Generic Service act as a generic interface between the services of component,
  //doing a assertive

  service!:APIService;
  url = ''
  urlLogin =''
  token = localStorage.getItem('TOKEN')
  public currentUser = new Subject<string>();

  constructor(){
    const TOKEN: any = this.token ? this.token : localStorage.getItem('TOKEN');
    if (TOKEN !== undefined && TOKEN !== null) {
       //When we have a jwtToken validation, we have to put him here
      APIService.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         /*  Authorization: `${TOKEN}`, */
        }),
      };
    }
  }

  //Implement token
  get(token?:string):Observable<T | null>{
    return this.service.get<T>(`${this.url}`)
  }

  //Implement token
  getById(id:string){
    return this.service.get<T>(`${this.url}/${id}`)
  }

  //Implement token
  post(data:T,token?:string):Observable <T | null>{
    return this.service.post<T>(`${this.url}`,data)
  }

  put(data:T,token?:string){
    return this.service.put<T>(`${this.url}`,data)
  }

  delete(id:string){
    this.service.delete(`${this.url}/${id}`)
  }

}
