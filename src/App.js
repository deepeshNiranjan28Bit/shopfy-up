import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { useMediaQuery } from "./misc/custom-hooks";

function App() {
  const isMobile = useMediaQuery("( max-width : 992px )");
  return (
    <div className="App" style={{ margin: isMobile ? "" : "5% 13% 2% 13%" }}>
      <Header />
      <Items />
    </div>
  );
}

export default App;
