import { Component, OnInit, Directive } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';
import { MyCity } from '../weather-item/myCity';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  //styleUrls: ['./weather-list.component.scss'],
  styleUrls: ['../app.component.scss']

})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];


  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    //Make equal to exporte array from const
    this.weatherItems = this.weatherService.getWeatherItems();
  }

}
