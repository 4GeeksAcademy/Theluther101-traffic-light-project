import React, {useState} from "react";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [ selectedColor, setSelectedColor ] = useState(red)
	return (
	  <div className="traffic-light">
		<div className= {selectedColor ==="light red" ? "red" : "light red"} onClick = {() => setSelectedColor("red")}></div>
		<div className="light yellow"></div>
		<div className="light green"></div>
	  </div>
	);
  }

export default Home;
