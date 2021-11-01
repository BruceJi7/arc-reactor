import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  function degToRadian(deg:number){ 
    return deg * (Math.PI/180);
  }

  function getXcoord(deg:number, hypo:number){

    // The sin of the degree is equal to ANS divided by HYPO
    // Get sin of degree.
    // Multiply this number by the HYPO
    // This will be the length co-ord

    const radA = degToRadian(deg)
    const sinA = Math.sin(radA)
    const xLength = sinA * hypo
    
    return xLength
  }

  function getYcoord(deg:number, hypo:number){

    // The sin of the degree is equal to ANS divided by HYPO
    // Get sin of degree.
    // Multiply this number by the HYPO
    // This will be the length co-ord

    const radA = degToRadian(deg)
    const cosA = Math.cos(radA)
    const yLength = cosA * hypo
    
    return yLength
  }

  function getTrigoXY(deg:number, height:number, width:number){
    const y = getYcoord(deg, height)
    const x = getXcoord(deg, width)
    return {x, y}
  }

  function makeImages(howMany:number, correction:number=0){

    const circles = []

    for (let i=0; i<=howMany-1; i++){

      const angle = (90 / howMany+1) * i - ((90/howMany)*(howMany/2) - correction)
      const position = getTrigoXY(angle, -200, 700);          
      circles.push(<img src={logo} className="atom" alt="logo" style={{top:position.y, left:position.x}} />) 
    }

    return circles

  }


  const circles = makeImages(7);


  return (
    <div className="App">
      <div className="atomBox">

      {
        circles.map((el)=> el)
      }
      
      </div>
    </div>
  );
}

export default App;
