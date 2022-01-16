import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { useMediaQuery, useCartState } from "./misc/custom-hooks";

function App() {
  const isMobile = useMediaQuery("( max-width : 992px )");
  const { isOpenCart, closeCart, openCart } = useCartState();

  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function count0() {
    setCount(0);
  }

  return (
    <div
      className="App"
      style={{ margin: isMobile ? "" : "3% 15% 2% 15%", zIndex: "1" }}
    >
      <Header
        countItem={count}
        count0={count0}
        isOpenCart={isOpenCart}
        closeCart={closeCart}
        openCart={openCart}
      />
      <Items
        countItem={count}
        incrementFunc={increment}
        decrementFunc={decrement}
        isOpenCart={isOpenCart}
        openCart={openCart}
        closeCart={closeCart}
      />
    </div>
  );
}

export default App;
