import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, share } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AppEventManagerService {
  /** private members */
  private observable: Observable<any>;

  private observer: Observer<any>;

  constructor() {
    this.observable = new Observable((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }

  public broadcast(event) {
    const value = this.observer;
    if (!(value === undefined || value === null)) {
      this.observer.next(event);
    }
  }

  public subscribe(eventName, callback) {
    return this.observable
      .pipe(
        filter((event) => {
          return event.name === eventName;
        })
      )
      .subscribe(callback);
  }

  public destroy(subscriber: Subscription) {
    subscriber.unsubscribe();
  }
}
