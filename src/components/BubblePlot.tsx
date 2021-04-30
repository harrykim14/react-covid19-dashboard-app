import React from 'react'
import { Bubble } from "react-chartjs-2"
import { ChartData } from 'chart.js'

const data: ChartData = {
    datasets: [
        {
            label: "React",
            backgroundColor: "#4169e1",
            borderColor: "transparent",
            data: [{ x: 20, y: 866, r: 107.0 }]
        },
        {
            label: "Angular",
            backgroundColor: "#c71585",
            borderColor: "transparent",
            data: [{ x: 30, y: 389, r: 5.8 }]
        },
        {
            label: "Vue",
            backgroundColor: "#008080",
            borderColor: "transparent",
            data: [{ x: 10, y: 749, r: 23.6 }]
        },
    ]
}

const options = {
    title :{
        display:true,
        fontSize: 18,
        text: "NPM Downloads comparison (global)"
    },
    scales: {
        y: {
            scaleLabel: {
                display: true,
                labelString: "Number of job offer in LinkedInt (Japan)",
                fontSize: 18
            },
            ticks: {
                min: 0,
                max: 2000,
                fontSize: 14
            }
        },
        x: {
            scaleLabel: {
                display: true,
                labelString: "Learning Cost",
                fontSize: 18
            },
            ticks: {
                min: 5,
                max: 35,
                fontSize: 14
            }
        }
    }
}

const BubblePlot: React.FC = () => {
    return (
        <div>
            <Bubble data={data} type="bubble" options={options} />
        </div>
    )
}

export default BubblePlot
