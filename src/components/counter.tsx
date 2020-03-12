import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "../@types";
import { CounterAction, incrementCounter, decrementCounter } from "../actions";
import { Dispatch } from "redux";

export interface ICounter {
    name: string;
    counter: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export function mapStateToProps({ counter, language }: StoreState) {
    return {
        name: language,
        counter: counter
    };
}

export function mapDispatchToProps(dispatch: Dispatch<CounterAction>) {
    return {
        onIncrement: () => dispatch(incrementCounter()),
        onDecrement: () => dispatch(decrementCounter())
    };
}

function counter({ name, counter = 1, onIncrement, onDecrement }: ICounter) {
    if (counter <= 0) {
        throw new Error("不能传入一个小于或等于0的数");
    }

    return (
        <div className="counter">
            <p>Hello {name}!</p>
            <div>
                <button onClick={onIncrement}>+</button>
                <span>Count: {counter}</span>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);
