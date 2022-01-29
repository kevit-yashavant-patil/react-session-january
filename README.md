# React JS

### Getting started

Run `npm install`.
Then run `npm start`.

Node version: 14+

----
### 1. What is React?

React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.

---

### 2. What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
Without using JSX, we would have to create an element by the following process:

```javascript
const text = React.createElement("p", {}, "This is a text");
const container = React.createElement("div", "{}", text);
ReactDOM.render(container, rootElement);
```

Using JSX, the above code can be simplified:

```javascript
const container = (
  <div>
    <p>This is a text</p>
  </div>
);
ReactDOM.render(container, rootElement);
```

---

### 3.Explain React state and props.

| props                             | state                                      |
| --------------------------------- | ------------------------------------------ |
| Immutable                         | Owned by its component                     |
| Has better performance            | Locally scoped                             |
| Can be passed to child components | Writeable/Mutable                          |
|                                   | Has setState() method to modify properties |
|                                   | Changes to state can be asynchronous       |
|                                   | Can only be passed as props                |

---

### 4. Explain React lifecycle

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

---

### constructor

The constructor for a React component is called before it is mounted.

When implementing the constructor for a `React.Component` subclass, you should call `super(props)` before any other statement. Otherwise, `this.props` will be undefined in the constructor, which can lead to bugs.

---

### componentDidMount

`componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree).

This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in `componentWillUnmount()`.

---

### componentDidUpdate

```javascript
componentDidUpdate(prevProps, prevState);
```

`componentDidUpdate()` is invoked immediately after updating occurs. This method is not called for the initial render.

---

### componentWillUnmount

`componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`.

You should not call `setState()` in `componentWillUnmount()` because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

---

### shouldComponentUpdate

```javascript
shouldComponentUpdate(nextProps, nextState);
```

Use `shouldComponentUpdate()` to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change.

---

### static getDerivedStateFromProps

```javascript
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

---

### Higher-Order Components

A higher-order component (HOC) is an advanced technique in React for reusing component logic.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

---

```
class ClassComponent extends Component {
    render() {
        return (
            <div class="w-[100vw] h-[100vh] flex justify-center items-center font-serif text-6xl">
                Thank you
            </div>
        );
    }
}
```
