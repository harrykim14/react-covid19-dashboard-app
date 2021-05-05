import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
import { ChartData } from "chart.js";
import { useSelector } from 'react-redux'
import { selectData, selectDailyData, selectCountry } from '../coivdSlice';

import styles from './Chart.module.css';


const Chart: React.FC = () => {
    const data = useSelector(selectData);
    const dailyData = useSelector(selectDailyData);
    const country = useSelector(selectCountry);

    const barChartData: ChartData = {
        labels: ["Infected", "Recovered", "Deaths" ],
        datasets: [
            {
                label: "People",
                backgroundColor: [
                    "rgba(0, 0, 255, 0.5)",
                    "#008080",
                    "rgba(255, 0, 0, 0.5)"
                ],
                data: [
                    data.confirmed.value,
                    data.recovered.value,
                    data.deaths.value,
                ],
            },
        ],
    }

    const lineChartData: ChartData = {
        labels: dailyData.map(({ reportDate }) => reportDate ),
        datasets: [
            {
                data: dailyData.map((data) => data.confirmed.total),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
            },
            {
                data: dailyData.map((data) => data.deaths.total),
                label: "Deaths",
                borderColor: "#ff3370",
                fill: true,
            }
        ]
    }

    const barChart = data && (
        <Bar
        data={barChartData}
        type="bar"
        options={{
            legend: { display: false },
            title: { display: true, text: `Latest status in ${country}`},
        }}
        />
    )

    const lineChart = dailyData[0] && (
        <Line
        data={lineChartData}
        type="line"
        />
    )
    
    return (
        <div className={styles.container}>
            {country.length ? barChart : lineChart }
        </div>
    )
}

export default Chart
