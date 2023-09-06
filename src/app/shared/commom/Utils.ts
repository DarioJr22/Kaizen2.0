import { AbstractControl, FormControl, FormGroup } from "@angular/forms";


export default class UtilS{

  //Form
  static convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }


}
