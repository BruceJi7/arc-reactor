import logo from './logo.svg';
import './App.css';
import makeArc from './lib/ArcReactor';

function App() {



  
  const circles = makeArc({imgSrc:logo, className:"atom", howMany:7, boxHeight:200, boxWidth:400, widthCorrection:-110});

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
