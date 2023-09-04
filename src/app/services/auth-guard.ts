import { Observable } from 'rxjs';
import { inject } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';



/*
export const AuthGuard:CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) => {

 const crecencials:Login ={
    login:atob(`${localStorage.getItem('login')}`),
    senha:atob(`${localStorage.getItem('senha')}`)
  }

  const loginS:LoginService = inject(LoginService);
  setTimeout(()=>{user.id != null ?  true : false},3000)
  const user:Usuario = new Usuario();
  const b:boolean = true
  loginS.login(crecencials).subscribe({
        next:(data:any) =>{Object.assign(user,data)},
        error:(error:any)=>{console.log(error)}
        })
return b */



