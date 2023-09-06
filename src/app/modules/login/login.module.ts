import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  LoginComponent,


  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    MatIconModule,
  ],
  providers: [],

})
export class LoginModule { }
