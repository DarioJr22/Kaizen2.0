import { Observable,tap,catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';
import { Notification, NotificationType } from '../shared/commom/messages/notification';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private baseUrl = localStorage.getItem('url');
  static httpOptions = {};
  isLoading = 0;

  constructor(private http: HttpClient,
    private notify:NotificationService) {}

  private prepareToken(token?: string) {
    const TOKEN: any = token ? token : localStorage.getItem('TOKEN');
    APIService.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       /*  Autorization: `Bearer ${TOKEN}` */
      }),
    };
  }
  //token:string
  post<T>(url: string, data: any = {}, token?: string): Observable<T | null> {
    this.isLoading++;
    this.prepareToken();
    return this.http
      .post<T>(this.baseUrl + url, data, APIService.httpOptions)
      .pipe(
        tap({
          next: () => {
            this.isLoading--
          },
          error: (error) => {
            const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
            this.notify.notify(notification)
          },
        }),
        catchError((error) => {
          this.isLoading--;
          const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
          this.notify.notify(notification)
          return throwError(() => new Error(error));
        })
      );
  }

  get<T>(url: string, token?: string): Observable<T | null> {
    return this.http.get<T>(this.baseUrl + url, APIService.httpOptions).pipe(
      tap({
        next: () => {
          this.isLoading--;
        },
        error: (error) => {
          const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
            this.notify.notify(notification)
        },
      }),
      catchError((error) => {
        this.isLoading--;
        const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
        this.notify.notify(notification)
        return throwError(() => new Error(error));
      })
    );
  }

  put<T>(url: string, data: any = {}, token?: string): Observable<T | null> {
    this.isLoading++;
    this.prepareToken();
    return this.http
      .put<T>(this.baseUrl + url, data, APIService.httpOptions)
      .pipe(
        tap({
          next: () => {
            this.isLoading--;
          },
          error: (error) => {
            const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
            this.notify.notify(notification)
          },
        }),
        catchError((error) => {
          this.isLoading--;
          const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
          this.notify.notify(notification)
          return throwError(() => new Error(error));
        })
      );
  }

  delete<T>(url: string, token?: string): Observable<T | null> {
    return this.http
      .delete<T>(this.baseUrl + url, APIService.httpOptions)
      .pipe(
        tap({
          next: () => {
            this.isLoading--;
          },
          error: (error) => {
            const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
            this.notify.notify(notification)
          },
        }),
        catchError((error) => {
          this.isLoading--;
          const notification:Notification = {message:`Erro ao realizar consulta ! Detalhes:${error.message}`,type:NotificationType.ERROR}
          this.notify.notify(notification)
          return throwError(() => new Error(error));
        })
      );
    }
}
