import { useState } from "react";
import "./App.css";
import Heading from "./Components/Header/heading";
import ButtonCustom from "./Components/Button/button";
import Display from "./Components/Display/display";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container border-8 m-auto rounded-xl border-black my-36">
      <Heading />
      <Display name={count} />
      <div className="flex flex-row mx-96 justify-evenly my-24">
        <ButtonCustom name="+" onClick={() => setCount(count + 1)} />
        <ButtonCustom name="0" onClick={() => setCount(0)} />
        <ButtonCustom name="-" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}

export default App;
