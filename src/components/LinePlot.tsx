import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from 'chart.js'

const data:ChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo Line Plot",
      data: [5, 6, 9, 15, 30, 40, 80],
      fill: false,
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
    },
  ],
};

const LinePlot = () => {
  return (
    <div>
      <Line data={data} type="line"/>
    </div>
  );
}; // react-chartjs-2의 컴포넌트는 data값과 type값이 반드시 필요함

export default LinePlot;