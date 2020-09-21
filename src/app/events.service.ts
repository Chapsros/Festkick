import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(lat: number, lon: number): Observable<any> {
    return this.http.get('https://api.seatgeek.com/2/events?lat=' + lat + '&long=' + lon +'&range=12mi')
  }
}
