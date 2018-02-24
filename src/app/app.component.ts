import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiDataService} from './Service/ApiDataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
name="ANGULAR PAGE";
data: any;
mydata;
constructor(private http:Http)
{

}

getData(){
   return this.http.get('https://developer.spotify.com/web-api')
   .map((res:Response) => res.text());
  }

  getContacts(){
    this.getData().subscribe(data =>{
      this.data = data;
      this.mydata= console.log(data);
    })
  }

}
