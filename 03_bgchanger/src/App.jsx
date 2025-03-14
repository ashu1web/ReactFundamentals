import { useState } from "react";
import "./App.css"; // Importing CSS file

function App() {
  // State to store the background color
  const [color, setColor] = useState("olive");

  // Functions to change color
  const redColor = () => setColor("red");
  const blueColor = () => setColor("blue");
  const greenColor = () => setColor("green");
  const purpleColor = () => setColor("purple");
  const blackColor = () => setColor("black");
  const yellowColor = () => setColor("yellow");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="button-box">
        <button className="red" onClick={redColor}>Red</button>
        <button className="blue" onClick={blueColor}>Blue</button>
        <button className="green" onClick={greenColor}>Green</button>
        <button className="purple" onClick={purpleColor}>Purple</button>
        <button className="black" onClick={blackColor}>Black</button>
        <button className="yellow" onClick={yellowColor}>Yellow</button>
      </div>
    </div>
  );
}

export default App;
