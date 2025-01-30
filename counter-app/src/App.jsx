import React, { useEffect, useState } from 'react';
import CounterView from './view/CounterView';
import CounterModel from './model/CounterModel';
import { CounterIntent } from './intent/CounterIntent';
import "./view/CounterView.css"; // ✅ Correct path

const App = () => {
    const model = CounterModel;
    const intent = new CounterIntent();
    const [count, setCount] = useState(0);
    const [autoIncrement, setAutoIncrement] = useState(false);

    useEffect(() => {
        const subscription = model.updateCount$.subscribe(setCount);
        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        const incrementSub = intent.increment$.subscribe(() => model.increment$.next());
        const decrementSub = intent.decrement$.subscribe(() => model.decrement$.next());
        const resetSub = intent.reset$.subscribe(() => model.reset$.next());
        return () => {
            incrementSub.unsubscribe();
            decrementSub.unsubscribe();
            resetSub.unsubscribe();
        };
    }, []);

    return (
        <div className="app-container">
            <CounterView
                count={count}
                onIncrement={() => model.increment$.next()}
                onDecrement={() => model.decrement$.next()}
                onReset={() => model.reset$.next()}
                onToggleAuto={() => {
                    model.toggleAutoIncrement();
                    setAutoIncrement(!autoIncrement);
                }}
                autoIncrement={autoIncrement}
            />
        </div>
    );
};

export default App;