import * as React from "react";

export interface ICounter {
    value: number;
}

const counter = ({ value }: ICounter) => {
    return <p>点击了: {value} 次</p>;
};

export default counter;
