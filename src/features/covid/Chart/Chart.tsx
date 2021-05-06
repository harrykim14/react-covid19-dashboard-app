import React from 'react'
import { Line } from 'react-chartjs-2';

import { ChartData } from "chart.js";
import { useSelector } from 'react-redux'
import { selectDaily } from '../covidSlice';

import styles from './Chart.module.css';


const Chart: React.FC = () => {
    const daily = useSelector(selectDaily);
    const dates = daily.map(({ Date }) => Date);

    const lineChartData: ChartData = {
        labels: dates.map((date) => new Date(date).toDateString()),
        datasets: [
            {
                data:daily.map((data) => data.Confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                showLine: false,
            },
            {
                data:daily.map((data) => data.Recovered),
                label: "Recovered",
                borderColor: "green",
                showLine: false,
            },
            {
                data:daily.map((data) => data.Deaths),
                label: "Deaths",
                borderColor: "#ff3370",
                showLine: false,
            },
        ]
    }

    const lineChart = daily[0] && (
        <Line data={lineChartData} type="line" />
    )
    
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart
