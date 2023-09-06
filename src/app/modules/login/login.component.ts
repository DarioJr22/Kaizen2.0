import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Utils from './../../shared/commom/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormGroup!:FormGroup


  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.formBuld()
  }

  formBuld(){
    this.FormGroup = this.fb.group({
      login:[''],
      senha:['']
      }
    )
  }

  getEventFields (param:string){
    return  Utils.convertToFormControl(this.FormGroup.controls[param])
  }


}
