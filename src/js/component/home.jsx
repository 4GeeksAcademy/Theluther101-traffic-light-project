import React, { useState } from "react";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
  const [selectedColor, setSelectedColor] = useState("selectedRed , selectedYellow , selectedGreen");
  return (
	<>
	<div className="stem"></div>
    <div className="traffic-light">
      <div
        className={
          selectedColor === "red" ? "light red selectedRed" : "light red"
        }
        onClick={() => setSelectedColor("red")}
      ></div>
      <div
        className={
          selectedColor === "yellow"
            ? "light yellow selectedYellow"
            : "light yellow"
        }
        onClick={() => setSelectedColor("yellow")}
      ></div>
      <div
        className={
          selectedColor === "green"
            ? "light green selectedGreen"
            : "light green"
        }
        onClick={() => setSelectedColor("green")}
      ></div>
    </div></>
  );
}

export default Home;
