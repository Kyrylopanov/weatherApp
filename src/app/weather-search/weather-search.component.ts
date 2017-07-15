import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item/weather-item';
import { MyCity } from '../weather-item/myCity';
import { MY_CITY } from '../weather-item/weather-data';
import {HttpModule} from '@angular/http';



@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']

})

export class WeatherSearchComponent implements OnInit {


  weatherCity: MyCity[];

  constructor(private _weatherService: WeatherService) {}

  //Add weather information
  onSubmit(form: NgForm) {
    this._weatherService.searchWeatherData(form.value.location)
          .subscribe(
            data => {
              const weatherItem = new WeatherItem(data.name, data.weather[0].description, Math.round(data.main.temp));
              this._weatherService.addWeatherItem(weatherItem);
            }
          );
  }


  ngOnInit() {
    //Get and past current location
    this._weatherService.getCurrentIpLocation()
              .subscribe(
                data => {
                  const newCityData = new MyCity(data.region);

                  this._weatherService.addCurrentLocation(newCityData);
                  //console.log(newCityData);

                  //Find users location/City
                  this._weatherService.searchWeatherData(newCityData.myCityName)
                          .subscribe(
                            data => {
                              const weatherItem = new WeatherItem(data.name, data.weather[0].description, Math.round(data.main.temp));
                              this._weatherService.addWeatherItem(weatherItem);
                              //console.log(newCityData.myCityName);
                            }
                          );
                }
              )
//this.weatherCity = this._weatherService.getWeatherCity();
}


}
