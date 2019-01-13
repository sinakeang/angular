import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-subscribe-with-positional-arguments',
  templateUrl: './subscribe-with-positional-arguments.component.html',
  styleUrls: ['./subscribe-with-positional-arguments.component.css']
})
export class SubscribeWithPositionalArgumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // Execute with positional arguments
    myObservable.subscribe(
      // next handler is required
      x => console.log('Observer got a next value: ' + x),
      // error handler is optional
      err => console.error('Observer got an error: ' + err),
      // complete handler is optional
      () => console.log('Observer got a complete notification')
    );
  }

}
