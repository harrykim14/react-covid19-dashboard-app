import React from 'react'
import { Pie, Doughnut } from 'react-chartjs-2';
import { ChartData } from 'chart.js'

const data: ChartData = {
  labels: ["Windows", "Mac", "Linux"],
  datasets: [
    {
      label: "OS Percentage",
      data: [90, 7, 3],
      backgroundColor: [ "#4169e1", "#ff1493", "#FFCE56" ],
      hoverBackgroundColor: [ "#36A2EB", "FF6384", "FFCE56" ],
      borderColor: [ "transparent", "transparent", "transparent"],
      pointBorderWidth: 10,
    },
  ],
};


const PiePlot: React.FC = () => {
    return (
        <div>
            <Pie data={data} type="pie"/>
            <Doughnut data={data} type="doughnut"/>
        </div>
    )
}

export default PiePlot
