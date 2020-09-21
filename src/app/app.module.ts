import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {AgmCoreModule} from '@agm/core';
import { CarteComponent } from './carte/carte.component';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    CarteComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    HttpClient,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC6kx9OUJ-JtD5GXNPw3sr8ARmKuumVzYs'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
