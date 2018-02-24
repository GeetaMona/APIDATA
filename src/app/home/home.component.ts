import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {ApiDataService} from '../Service/ApiDataService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:string;
data:any={};
mydata;
show;

 constructor(private myService:ApiDataService) { 
    this.name="Angular Service";
   this.mydata= this.myService.GetPost().subscribe(posts => { console.log(posts)})
 }

  ngOnInit() {
  }

}
