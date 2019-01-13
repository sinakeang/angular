import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-observable-with-constructor',
  templateUrl: './create-observable-with-constructor.component.html',
  styleUrls: ['./create-observable-with-constructor.component.css']
})
export class CreateObservableWithConstructorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // This function runs when subscribe() is called
    function sequenceSubscriber(observer) {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return { unsubscribe() {}};
    }

    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

    // Execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

    // Logs:
    // 1
    // 2
    // 3
    // Finished sequence
  }

}
