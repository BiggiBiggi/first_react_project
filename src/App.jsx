import { useState } from "react";
import "./App.css";


const ColorChanger = ({ name }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };
  const handleIncrement = (colorSetter, colorValue) => {
    colorSetter(Math.min(colorValue + 6.66, 255));
  };
  const handleDecrement = (colorSetter, colorValue) => {
    colorSetter(Math.max(colorValue - 6.66, 0));
  };
  return (
    <div>
      <div style={divStyle}></div>
      <div>
        <h3>Red: {red}</h3>
        <button onClick={() => handleIncrement(setRed, red)}>
          Increment Red
        </button>
        <button onClick={() => handleDecrement(setRed, red)}>
          Decrement Red
        </button>
      </div>
      <div>
        <h3>Green: {green}</h3>
        <button onClick={() => handleIncrement(setGreen, green)}>
          Increment Green
        </button>
        <button onClick={() => handleDecrement(setGreen, green)}>
          Decrement Green
        </button>
      </div>
      <div>
        <h3>Blue: {blue}</h3>
        <button onClick={() => handleIncrement(setBlue, blue)}>
          Increment Blue
        </button>
        <button onClick={() => handleDecrement(setBlue, blue)}>
          Decrement Blue
        </button>
      </div>
    </div>
  );
};
function App() {
  return (
    <>
      <h1>Color Changer</h1>
      <ColorChanger />
    </>
  );
}
export default App;
