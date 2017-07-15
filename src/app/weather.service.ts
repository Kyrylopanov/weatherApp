import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WEATHER_ITEMS } from './weather-item/weather-data';
import { MY_CITY } from './weather-item/weather-data';
import { Observable } from 'rxjs/Observable';
import { WeatherItem } from './weather-item/weather-item';
import { MyCity } from './weather-item/myCity';
import {HttpModule} from '@angular/http';

import  'rxjs/Rx';

@Injectable()

export class WeatherService {

  constructor(private _http: Http) {}

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  getWeatherCity() {
    return MY_CITY;
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  addCurrentLocation(myCity: MyCity) {
    MY_CITY.push(myCity);
  }

  //Search any city from openweather API
  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=66a8a1bd027a0b7fab594b40710bc90a&units=metric')
            .map(response => response.json())
            .catch(error => {
              console.error(error);
              return Observable.throw(error.json())
            });
  }

  //Search current city by users IP
  getCurrentIpLocation(): Observable<any> {
        return this._http.get('http://ipinfo.io/json')
        .map(response => response.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error.json());
        });
    }

}
