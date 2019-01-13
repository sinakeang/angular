import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe-geolocation-updates',
  templateUrl: './observe-geolocation-updates.component.html',
  styleUrls: ['./observe-geolocation-updates.component.css']
})
export class ObserveGeolocationUpdatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create an Observable that will start listening to geolocation updates
    // when a consumer subscribes
    const locations = new Observable((observer) => {
      // Get the next and error callbacks. These will be passed in when
      // the consumer subscribes.
      const {next, error} = observer;
      let watchId;

      // Simple geolocation API check provides values to publish
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(next, error);
      } else {
        error('Geolocation not available');
      }

      // When the consumer unsubscribes, clean up data ready for next subscription.
      return { unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
    });

    // Call subscibe() to start listening for updates.
    const locationsSubscription = locations.subscribe({
      next(position) { console.log('Current Position: ', position); },
      error(msg) { console.log('Error Getting Location: ', msg); }
    });

    // Stop listening for location after 10 seconds
    setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);
  }
}
