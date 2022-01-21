import { useState } from "react";
import BasicCard from "./Components/BasicCard";
import Home from "./Home";
import OnlyIconCard from "./Components/OnlyIconCard";
import HorizontalImageText from "./Components/HorizontalImageText";

function App() {
  const [card, setCard] = useState("Basic Card");

  const test = (e) => {
    setCard(e.target.value);
  };

  return (
    <div className="App">
      {card === "Basic Card" && <BasicCard />}
      {card === "OnlyIconCard" && <OnlyIconCard />}
      {card === "HorizontalImageText" && <HorizontalImageText />}
      <Home test={test} />
    </div>
  );
}

export default App;
