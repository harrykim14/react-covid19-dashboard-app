import React from 'react';
import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot';
import BarPlot from './components/BarPlot';
import RadarPlot from './components/RadarPlot';
import './App.css';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
    </div>
  );
}

export default App;
