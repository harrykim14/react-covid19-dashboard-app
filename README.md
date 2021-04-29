# React로 만드는 코로나 바이러스 Live 대쉬보드

(강의명: [React で作るコロナウイルス Live ダッシュボード](https://www.udemy.com/course/covid-19-react-live/))

- 수강일 : 2021. 04. 29 ~
- 수강 목적
  (1) 타입스크립트로 작성하는 React 어플리케이션에 대한 복습
  (2) 자바스크립트의 Chart관련 라이브러리의 숙달 및 타입스크립트 도입
  (3) Material UI로 작성하는 그리드 디자인 패턴 복습 및 숙달
  (4) Redux에 타입스크립트를 적용하는 법에 대한 공부 및 Redux DevTool 복습
  (5) Firebase에 배포하기 복습

## 여러가지 차트 예제를 그려보며 Chart.js 맛보기

```typescript
import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

const data: ChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo Line Plot",
      data: [5, 6, 9, 15, 30, 40, 80],
      fill: true,
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
    },
  ],
};

const LinePlot = () => {
  return (
    <div>
      <Line data={data} type="line" />
    </div>
  );
}; // react-chartjs-2의 컴포넌트는 data값과 type값이 반드시 필요함

export default LinePlot;
```
