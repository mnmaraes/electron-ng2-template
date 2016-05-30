import { Component } from "@angular/core";

import { Observable } from "rxjs"
import { ActionReducer, Action, Store } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}

interface IAppState {
  counter: number
}

@Component({
  selector: 'counter',
  template: `
    <div>
      <button (click)='decrement()'>-</button>
      <span>{{counter | async}}</span>
      <button (click)='increment()'>+</button>
    </div>
  `
})
export class Counter {
  counter: Observable<number>

  constructor(private store: Store<IAppState>) {
    this.counter = store.select((state) => state.counter)
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
}
