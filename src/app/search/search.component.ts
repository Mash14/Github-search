import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  user!: any[];
  repos!: any[];
  
  constructor(dataService:DataService) { }
  
  searchUser() {
    
  }
  ngOnInit(): void {
  }

}
