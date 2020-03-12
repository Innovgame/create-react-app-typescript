import { CounterAction } from "../actions";
import { StoreState } from "../@types";
import { INCREMENT, DECREMENT } from "../constants";

export function counter(state: StoreState, action: CounterAction): StoreState {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: Math.max(1, state.counter - 1) };
        default:
            return state;
    }
}
