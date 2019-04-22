import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {

currentWeatherUrl='http://api.openweathermap.org/data/2.5/weather?units=metric&q='  
url:string='http://api.openweathermap.org/data/2.5/forecast?units=metric&q=';
authKey:string='&APPID=d515d6e1f91e38f1caaad0ab0a8b2484'
  constructor(private http:HttpClient) { }

  getFact(city:string){
    return this.http.get(this.url+city+this.authKey);
  }

  getCurrentData(city:string){
    return this.http.get(this.currentWeatherUrl+city+this.authKey)
  }

}
