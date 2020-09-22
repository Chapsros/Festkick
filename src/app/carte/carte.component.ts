import {Component, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import {SongkickService} from '../songkick.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements AfterViewInit {
  map;
  data: any;
  latitude: number;
  longitude: number;


  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  constructor(private servis: SongkickService) { }

  getSongData(): any{
    this.servis.getsong().subscribe((data: HttpResponse<any>) => {
      this.data = data;
      this.latitude = this.data.resultsPage.clientLocation.lat;
      this.longitude = this.data.resultsPage.clientLocation.lng;
      this.createMap(this.latitude, this.longitude);
    });
  }

  ngAfterViewInit(): void {
    this.getSongData();
  }

  createMap(latitude: number, longitude: number): any{
    const Location = {
      lati: latitude,
      long: longitude,
    };

    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [Location.lati, Location.long],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 6,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    const descriptionWikipedia = `
      Ynov Lyon.`;
    const popupOptions = {
      coords: Location,
      text: descriptionWikipedia,
      open: true
    };
    this.addMarker(popupOptions);
  }

  addMarker({coords, text, open}): any {
    const marker = L.marker([coords.lati, coords.long], { icon: this.smallIcon });
    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }
}
