import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private weatherService: WeatherService
    ) {

    }
    ngOnInit(): void {
        this.weatherService.getWeather(44.786568, 20.448922).subscribe((data: any) => {
            if (!data) return;
            console.log(data);
            this.ui.data = data;
        }, (err: any) => {
            console.log(err);
        });
    }

    public ceil(temp: number): number {
        if (!temp) return 0;
        return Math.ceil(temp);
    }

    public ui = {
        data: <WeatherData>{},
        h: {
            ceil: this.ceil.bind(this)
        }
    };
}
