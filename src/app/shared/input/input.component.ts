import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
 //Field attributes
 @Input() name!:string;
 @Input() type:string = 'text';
 @Input() control:FormControl = new FormControl();
 @Input() message:any = {description:'',type:''};
 @Input() disab:boolean = false;
 @Input() placeholder:string = '';
 @Input() mask:string = ''

/*   getMask(): string {
   return this.type === 'cpf' ? '000.000.000-00' : '00.000.000/0000-00';
 } */


 //Value bind
 @Output() blur:EventEmitter<any> = new EventEmitter()
 @Output() keyUp:EventEmitter<any> = new EventEmitter()

}
