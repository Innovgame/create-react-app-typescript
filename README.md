# React Typescript Tests

## 创建项目

1.通过 create-react-app 创建

```sh
# create-react-app
$ npx create-react-app my-app --template typescript
```

2.启动

```sh
# start
$ yarn start
```

## 第一个组件

1.创建一个函数式组件 Counter

```js
// counter.tsx 创建函数式组件Counter
export interface ICounter {
  value: number;
}

const counter = ({ value }: ICounter) => {
  return <p>点击了: {value} 次</p>;
};

// App.tsx 中 使用counter组件
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <Counter value={2} />
    </div>
  );
}
```

2.将 couter 改成类定义的组件

```diff
# counter.tsx
export interface ICounter {
    value: number;
}
- const counter = ({ value }: ICounter) => {
-   return <p>点击了: {value} 次</p>;
- };

+ class Counter extends React.PureComponent<ICounter> {
+   render() {
+       return <p>点击了: {this.props.value}次</p>;
+   }
+ }

```

## 使用 redux

### 安装 redux

```sh
# yarn add
$ yarn add redux react-redux @types/react-redux --save
```

### 创建一个 store

```typescript
// src/types/index.tsx
export interface StoreState {
  language: string;
  counter: number;
}
```

### 创建一个 action 类型

```typescript
// src/constants/index.tsx
export const INCREMENT = "INCREMENT";
export type INCREMENT = typeof INCREMENT;

export const DECREMENT = "DECREMENT";
export type DECREMENT = typeof DECREMENT;
```

### 创建 action

```typescript
// src/actions/index.tsx
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
```

### 创建 reducer

```typescript
// src/reducers/index.tsx
import { CounterAction } from "../actions";
import { StoreState } from "../@types";
import { INCREMENT, DECREMENT } from "../constants";

export function counter(state: StoreState, action: CounterAction): StoreState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
```
