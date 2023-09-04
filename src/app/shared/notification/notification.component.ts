import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from "../commom/messages/notification";

@Component({
  selector: 'mv-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

notifications:any[] =[]
constructor(private notificacoesService:NotificationService){
  this.notifications = notificacoesService.notifications;
}

close(n:number,tipo:HTMLElement){
  //Animation reverse para fechar a notificação - Ainda não resolvido
   tipo.style.cssText = 'animation-direction: reverse';
   //Fecha a notificação
   this.notificacoesService.closeNotify(n)
  }
}
