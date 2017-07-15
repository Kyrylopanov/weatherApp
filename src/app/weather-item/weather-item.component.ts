import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from './weather-item';
import { MY_CITY } from './weather-data';
import { WeatherService } from '../weather.service';
import { WEATHER_ITEMS } from './weather-data';
import { MyCity } from '../weather-item/myCity';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  //bind Item from weather-list component
  @Input('item') weatherItem: WeatherItem;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {

  }


}
