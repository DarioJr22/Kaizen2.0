import { FormGroup } from '@angular/forms';
import { Message, MessageDescriptions, MessageTypes } from '../messages/message';

export class GenericValidator{
  constructor(private validationMessages:ValidationMessages){

  }

  processMessages(form:FormGroup){
    let messages:Message | any = { description:'',type:'' }
    for(let controlKey in form.controls){
      //Verify if that instance of form control are on list of formControls
      //Of that formGroup
      if(form.controls.hasOwnProperty(controlKey)){
      //if its true, instanciate on a variable
        let c = form.controls[controlKey]

      //If it is a intance of formGroup, call this method again, else make other processo of attr of validation
        if(c instanceof FormGroup){
          let childMessages = this.processMessages(c)
          Object.assign(messages,childMessages)
        }else{
          if(this.validationMessages[controlKey]){
            messages[controlKey] ={ description:'',type:''};
            if((c.dirty ||c.touched) && c.errors){
              Object.keys(c.errors).map(messageK => {
                messages[controlKey]={description:this.validationMessages[controlKey][messageK],type:MessageTypes.error}
              })
            }
          }
        }
      }
    }
    return messages
  }
}





export interface DisplayMessage {
  [key: string]:Message
}

export interface ValidationMessages {
[key: string]:{[key:string]:string}
}
