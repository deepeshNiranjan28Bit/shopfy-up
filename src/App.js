import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { useMediaQuery } from "./misc/custom-hooks";

function App() {
  const isMobile = useMediaQuery("( max-width : 992px )");
  return (
    <div className="App" style={{ margin: isMobile ? "" : "3% 15% 2% 15%" }}>
      <Header />
      <Items />
    </div>
  );
}

export default App;
