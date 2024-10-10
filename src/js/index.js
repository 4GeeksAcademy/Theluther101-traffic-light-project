//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
// export function Home() {
//   const [ selectedColor, setSelectedColor ] = useState(selectedRed)
//   return (
//     <div className="traffic-light">
//       <div className= {selectedColor ==="red" ? "red selectedRed" : "red"} onClick{() => setSelectedColor("red")}></div>
//       <div className="light yellow"></div>
//       <div className="light green"></div>
//     </div>
//   );
// }
//render your react application
ReactDOM.createRoot(document.getElementById("app")).render(<Home />);
