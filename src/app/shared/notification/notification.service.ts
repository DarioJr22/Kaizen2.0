import { Injectable,Inject,Optional} from "@angular/core";
import { Notification } from "../commom/messages/notification";

@Injectable({
  providedIn:'root'
})

export class NotificationService{

  //Array Notificações
  notifications:Array<Notification> = []


  constructor(@Inject('ttlDefault') @Optional() private ttlDefault:number){
    this.ttlDefault = ttlDefault || 3000
  }

  notify(notification:Notification){
    notification.id = Math.random();
    if(!notification.ttl){
      notification.ttl = this.ttlDefault
    }
    console.log(notification)
    this.notifications.push(notification);
    setTimeout(() => {
      this.notifications.shift()
    },this.ttlDefault
  );
  }

  closeNotify(id:number){
    this.notifications.splice(this.notifications.findIndex( x => x.id == id),1)
  }

}
