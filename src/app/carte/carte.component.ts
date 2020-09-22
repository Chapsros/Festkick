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
  description = 'Vous êtes ici';

  smallIcon = new L.Icon({
    iconUrl: 'https://cdn.pixabay.com/photo/2020/04/29/16/50/navigation-5109651_960_720.png',
    iconRetinaUrl: 'https://cdn.pixabay.com/photo/2020/04/29/16/50/navigation-5109651_960_720.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  smallIcon2 = new L.Icon({
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
      for (const i of this.data.resultsPage.results.event){
        this.addMarker({
          latitude: i.location.lat,
          longitude: i.location.lng,
          text: i.displayName,
          open: false,
          icon: this.smallIcon
        });
      }
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
    const popupOptions = {
      latitude: Location.lati,
      longitude: Location.long,
      text: this.description,
      open: false,
      icon: this.smallIcon2
    };
    this.addMarker(popupOptions);
  }

  addMarker({latitude, longitude, text, open, icon}): any {
    const marker = L.marker([latitude, longitude], { icon });
    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }
}
