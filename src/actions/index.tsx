import * as constants from "../constants";

export interface IIncrement {
    type: constants.INCREMENT;
}

export interface IDecrement {
    type: constants.DECREMENT;
}

export type CounterAction = IIncrement | IDecrement;

export function incrementCounter(): CounterAction {
    return {
        type: constants.INCREMENT
    };
}

export function decrementCounter(): CounterAction {
    return {
        type: constants.DECREMENT
    };
}
