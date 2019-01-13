import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-observable-from-event-function',
  templateUrl: './create-observable-from-event-function.component.html',
  styleUrls: ['./create-observable-from-event-function.component.css']
})
export class CreateObservableFromEventFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function fromEvent(target, eventName) {
      return new Observable((observer) => {
        const handler = (e) => observer.next(e);

        // Add the event handler to the target
        target.addEventListener(eventName, handler);

        return () => {
          // Detach the event handler from the target
          target.removeEventListener(eventName, handler);
        };
      });
    }

    // Use custom fromEvent function
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;

    const subscription = fromEvent(nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
          nameInput.value = '';
        }
      }
    );
  }

}
