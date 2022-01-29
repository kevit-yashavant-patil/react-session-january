import { createContext, useState } from "react";
import ClassComponent from "./components/ClassComponent";
import { store } from "./redux/reduxStore";
import { Provider } from "react-redux";
import { Button } from "./components/Button";

export const CountContext = createContext(0);

function App() {
  const [state, setState] = useState(false);
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <CountContext.Provider value={{ count, setCount }}>
        {state && <ClassComponent data={data} setData={setData} />}
        <br />
        <Button onClick={() => setState((pre) => !pre)}>{state ? 'hide' : 'show'} component</Button>
      </CountContext.Provider>
    </Provider>
  );
}

export default App;
