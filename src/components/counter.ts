import { Component } from "angular2/core";

@Component({
  selector: 'counter',
  template: `
    <div>
      <button (click)='decrement()'>-</button>
      <span>{{count}}</span>
      <button (click)='increment()'>+</button>
    </div>
  `
})
export class Counter {
  count: number = 0

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
