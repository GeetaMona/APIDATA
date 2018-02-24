import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ApiDataService{

    constructor(private http:Http)
    {

    }

    GetPost(){
       return this.http.get('https://developer.spotify.com/web-api')
        .map(result => result.text());
    }


    GetPostAsPerId(Id :any){
        return this.http.get('https://developer.spotify.com/web-api'+Id)
        .map(result => result.text());
    }
    }
    