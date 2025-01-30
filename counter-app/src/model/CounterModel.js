import { BehaviorSubject, interval, merge, Subject } from 'rxjs';
import { map, scan, startWith, switchMap, filter } from 'rxjs/operators';

const count$ = new BehaviorSubject(0);
const autoIncrement$ = new BehaviorSubject(false);

const increment$ = new Subject();
const decrement$ = new Subject();
const reset$ = new Subject();

const updateCount$ = merge(
    increment$.pipe(map(() => (count) => Math.min(count + 1, 98))),
    decrement$.pipe(map(() => (count) => Math.max(count - 1, 0))),
    reset$.pipe(map(() => () => 0)),
    autoIncrement$.pipe(
        switchMap(enabled => 
            enabled ? interval(1100).pipe(map(() => (count) => Math.min(count + 1, 98))) : []
        )
    )
).pipe(
    filter(operation => typeof operation === 'function'),
    startWith((count) => count),
    scan((count, operation) => operation(count), 0)
);

const toggleAutoIncrement = () => {
    autoIncrement$.next(!autoIncrement$.value);
};

export const CounterModel = {
    count$,
    autoIncrement$,
    increment$,
    decrement$,
    reset$,
    updateCount$,
    toggleAutoIncrement
};

export default CounterModel;
