import { Subject } from 'rxjs';

export class CounterIntent {
    constructor() {
        this.increment$ = new Subject();
        this.decrement$ = new Subject();
        this.reset$ = new Subject();
    }

    increment() {
        this.increment$.next(1);
    }

    decrement() {
        this.decrement$.next(-1);
    }

    reset() {
        this.reset$.next(0);
    }
}
