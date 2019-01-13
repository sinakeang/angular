import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObserveGeolocationUpdatesComponent } from './observables/observe-geolocation-updates/observe-geolocation-updates.component';
import { SubscribeUsingObserverComponent } from './observables/subscribe-using-observer/subscribe-using-observer.component';
import { SubscribeWithPositionalArgumentsComponent } from './observables/subscribe-with-positional-arguments/subscribe-with-positional-arguments.component';
import { CreateObservableWithConstructorComponent } from './observables/create-observable-with-constructor/create-observable-with-constructor.component';
import { CreateObservableFromEventFunctionComponent } from './observables/create-observable-from-event-function/create-observable-from-event-function.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserveGeolocationUpdatesComponent,
    SubscribeUsingObserverComponent,
    SubscribeWithPositionalArgumentsComponent,
    CreateObservableWithConstructorComponent,
    CreateObservableFromEventFunctionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
