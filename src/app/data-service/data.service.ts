import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private clientid:string = "2206884297e31cf03661";
  private clientsecret:string = "0133f67c516087b1beb585c59709bb7b4f44d89f";
  private username:string;

  constructor(private http: HttpClient) {
    console.log("It works");
    this.username = "AlanMacharia"
  }

  getUserInfo() {
    return this.http.get(environment.apiUrl  + this.username + '?client_id=' + 'apiToken=' + environment.apiToken)
  }
  getUserRepo() {
    return this.http.get(environment.apiUrl + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }
  
}
