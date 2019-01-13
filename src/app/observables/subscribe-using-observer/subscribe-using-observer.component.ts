import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-subscribe-using-observer',
  templateUrl: './subscribe-using-observer.component.html',
  styleUrls: ['./subscribe-using-observer.component.css']
})
export class SubscribeUsingObserverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // Create observer object
    const myObserver = {
      // next handler is required
      next: x => console.log('Observer got a next value: ', + x),
      // error handler is optional
      error: err => console.error('Observer got an error: ' + err),
      // complete handler is optional
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    myObservable.subscribe(myObserver);
    // Console logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
  }

}
