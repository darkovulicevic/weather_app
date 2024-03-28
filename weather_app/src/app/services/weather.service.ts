import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _base_url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getWeather(lat: number, lon: number): any {
    const url = `${this._base_url}/api/weather`;
    return this.http.post(url, { lat, lon });
  }
}
