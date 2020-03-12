import * as React from "react";

export interface ICounter {
    value: number;
}

class Counter extends React.PureComponent<ICounter> {
    render() {
        return <p>点击了: {this.props.value}次</p>;
    }
}

export default Counter;
