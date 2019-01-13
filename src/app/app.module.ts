import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObserveGeolocationUpdatesComponent } from './observables/observe-geolocation-updates/observe-geolocation-updates.component';
import { SubscribeUsingObserverComponent } from './observables/subscribe-using-observer/subscribe-using-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserveGeolocationUpdatesComponent,
    SubscribeUsingObserverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
