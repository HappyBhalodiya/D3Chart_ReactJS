import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import * as d3 from "d3";
import PieClass from "./PieClass";
import PieHooks from "./PieHooks";
import PieSVG from "./PieSVG";
import AnimatedPieHooks from "./AnimatedPieHooks";
import AnimatedPieSVG from "./AnimatedPieSVG";
import "./App.css";

let value = [
    {id:1,value:100},
    {id:2,value:180},
    {id:3,value:250},
    {id:4,value:75},
    {id:5,value:96},
  ]

function App() {
  // const generateData = (value, length = 6) =>
  //   d3.range(length).map((item, index) => ({
  //     date: index,
  //     value: value === null || value === undefined ? Math.random() * 100 : value
  //   }));
          
  // const [data, setData] = useState(generateData(0));
  // const changeData = () => {
  //   setData(generateData());
  // };

  // useEffect(
  //   () => {
  //     setData(generateData());
  //   },
  //   [!data]
  // );
  // console.log("value======================",data);

  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-6" >
          <div>
            <span className="label">Animated Pie SVG (React Spring)</span>
            <AnimatedPieSVG
              data={value}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </div>
          <div>
            <span className="label">Animated Pie Hooks (D3 animations)</span>
            <AnimatedPieHooks
              data={value}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </div>
          <div>
            <span className="label">SVG Elements</span>
            <PieSVG
              data={value}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </div>
        </div>
        <div className="col-sm-6" >
          <div>
            <span className="label">Hooks</span>
            <PieHooks
              data={value}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </div>
          <div>
            <span className="label">React Class</span>
            <PieClass
              data={value}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </div>
        </div>

      </div>


    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
