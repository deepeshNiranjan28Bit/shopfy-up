import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { useMediaQuery } from "./misc/custom-hooks";

function App() {
  const isMobile = useMediaQuery("( max-width : 992px )");

  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div
      className="App"
      style={{ margin: isMobile ? "" : "3% 15% 2% 15%", zIndex: "1" }}
    >
      <Header countItem={count} />
      <Items
        countItem={count}
        incrementFunc={increment}
        decrementFunc={decrement}
      />
    </div>
  );
}

export default App;
