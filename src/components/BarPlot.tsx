import React from 'react'
import { Bar } from "react-chartjs-2";
import { ChartData } from 'chart.js'

const data: ChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Demo Bar Plot",
            backgroundColor: "#20b2aa",
            borderColor: "transparent",
            hoverBackgroundColor: "#5f9ea0",
            data: [ 50, 30, 70, 15, 50, 0, 100]
        }
    ]
}
const options = {
    indexAxis: 'y',
}

const BarPlot: React.FC = () => {
    return (
        <div>
            <Bar data={data} type="bar"/>
            <Bar data={data} type="bar" options={options}/>
        </div>
    )
}

export default BarPlot
