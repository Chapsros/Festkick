import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongkickService {

  // tslint:disable-next-line:variable-name
  static readonly API_key = 'io09K9l3ebJxmxe2';

  constructor(private http: HttpClient) { }

  getsong(ip: string): Observable<any> {
    return this.http.get('https://api.songkick.com/api/3.0/events.json?apikey=' + SongkickService.API_key + '&location=ip:' + ip );
  }
}
