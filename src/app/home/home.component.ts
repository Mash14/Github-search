import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Data } from '../data';
import { Repos } from '../repos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  userRepo: any;
  userName: any;
  
  repos: any;
  
  constructor(private dataService:DataService) { 
    this.dataService.getUserName().subscribe((userName:any) => {
      console.log(this.userName),
      this.userName = userName
    });
    this.dataService.getUserRepo().subscribe((userRepo:any) => {
      console.log(this.userRepo),
      this.userName = userRepo
    });
  }
  ngOnInit(): void {
  }

  userProfile() {
    this.dataService.updateUserProfile(this.userName);
    this.dataService.getUserName().subscribe((user: any[]) => {
      console.log(user);
      this.user = user;
    });
    this.dataService.getUserRepo().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }

}
