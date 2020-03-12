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
