import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  clientId:string = "2206884297e31cf03661";
  clientSecret:string = "0133f67c516087b1beb585c59709bb7b4f44d89f";
  userName:any;

  constructor(private http: HttpClient) {
    console.log("It works");
    this.userName = "AlanMacharia"
  }

  getUserName() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getUserRepo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }
  
  updateUserProfile(userName:string) {
    this.userName = userName;
  }
}
