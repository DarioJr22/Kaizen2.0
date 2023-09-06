import { Component, Input } from '@angular/core';

@Component({
  selector: 'kz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input() type:string ='raised'

}
