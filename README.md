# React로 만드는 코로나 바이러스 Live 대쉬보드

(강의명: [React で作るコロナウイルス Live ダッシュボード](https://www.udemy.com/course/covid-19-react-live/))

- 수강일 : 2021. 04. 29 ~
- 수강 목적<br/>
  (1) 타입스크립트로 작성하는 React 어플리케이션에 대한 복습 <br/>
  (2) 자바스크립트의 Chart관련 라이브러리의 숙달 및 타입스크립트 도입<br/>
  (3) Material UI로 작성하는 그리드 디자인 패턴 복습 및 숙달<br/>
  (4) Redux에 타입스크립트를 적용하는 법에 대한 공부 및 Redux DevTool 복습<br/>
  (5) Firebase에 배포하기 복습<br/>

### 여러가지 차트 예제를 그려보며 Chart.js 맛보기

<details>
<summary>(1) Line Chart</summary>
<div markdown="1-1">

<br/>
<image src="https://user-images.githubusercontent.com/67398691/116504620-abeeb800-a8f3-11eb-9e6a-18945b961cf7.png" alt="line chart" width="600px" />

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

</div>
</details>

<details>
<summary>(2) Pie Chart and Dougnut Chart</summary>
<div markdown="1-2">
  
<br/>
<image src="https://user-images.githubusercontent.com/67398691/116504749-038d2380-a8f4-11eb-9de2-4c7c36da6e2c.PNG" alt="pie chart" width="600px" />
<image src="https://user-images.githubusercontent.com/67398691/116504766-10117c00-a8f4-11eb-82d0-d4d5839156d4.png" alt="pie chart" width="600px" />

```typescript
import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";

const data: ChartData = {
  labels: ["Windows", "Mac", "Linux"],
  datasets: [
    {
      label: "OS Percentage",
      data: [90, 7, 3],
      backgroundColor: ["#4169e1", "#ff1493", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "FF6384", "FFCE56"],
      borderColor: ["transparent", "transparent", "transparent"],
      pointBorderWidth: 10,
    },
  ],
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <Pie data={data} type="pie" />
      <Doughnut data={data} type="doughnut" />
    </div>
  );
};

export default PiePlot;
```

</div>
</details>

<details>
<summary>(3) Bar Chart (Vertial and Horizontal)</summary>
<div markdown="1-3">

<br/>
<image src="https://user-images.githubusercontent.com/67398691/116504726-f839f800-a8f3-11eb-8c58-6739f2709515.png" alt=" chart" width="600px" />

```typescript
import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";

const data: ChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo Bar Plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [50, 30, 70, 15, 50, 0, 100],
    },
  ],
};
const options = {
  indexAxis: "y",
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} type="bar" />
      <Bar data={data} type="bar" options={options} />
    </div>
  );
};

export default BarPlot;
```

</div>
</details>

<details>
<summary>(4) Radar Chart</summary>
<div markdown="1-4">
 
<br/>
<image src="https://user-images.githubusercontent.com/67398691/116504707-ea847280-a8f3-11eb-96ad-bc6a3eb70708.png" alt="radar chart" width="600px" />

```typescript
import React from "react";
import { Radar } from "react-chartjs-2";
import { ChartData } from "chart.js";

const data: ChartData = {
  labels: [
    "React",
    "Vue",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Redux",
    "REST API",
  ],
  datasets: [
    {
      label: "Person A",
      backgroundColor: "rgba(179, 181, 198, 0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [100, 50, 30, 90, 50, 70, 40],
    },
    {
      label: "Person B",
      backgroundColor: "rgba(179, 181, 198, 0.2)",
      borderColor: "#ff1493",
      pointBackgroundColor: "#ff1493",
      pointBorderColor: "#fff",
      data: [10, 30, 100, 10, 100, 70, 60],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar type="radar" data={data} />
    </div>
  );
};

export default RadarPlot;
```

</div>
</details>

<details>
<summary>(5) Bubble Chart</summary>
<div markdown="1-5">
<br/>
<image src="https://user-images.githubusercontent.com/67398691/116535415-b1adc300-a91e-11eb-901b-ac6c8ea20044.png" alt="bubble chart" width="600px" />

```typescript
import React from "react";
import { Bubble } from "react-chartjs-2";
import { ChartData } from "chart.js";

const data: ChartData = {
  datasets: [
    {
      label: "React",
      backgroundColor: "#4169e1",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 107.0 }],
    },
    {
      label: "Angular",
      backgroundColor: "#c71585",
      borderColor: "transparent",
      data: [{ x: 30, y: 389, r: 5.8 }],
    },
    {
      label: "Vue",
      backgroundColor: "#008080",
      borderColor: "transparent",
      data: [{ x: 10, y: 749, r: 23.6 }],
    },
  ],
};

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: "NPM Downloads comparison (global)",
  },
  scales: {
    y: {
      scaleLabel: {
        display: true,
        labelString: "Number of job offer in LinkedInt (Japan)",
        fontSize: 18,
      },
      ticks: {
        min: 0,
        max: 2000,
        fontSize: 14,
      },
    },
    x: {
      scaleLabel: {
        display: true,
        labelString: "Learning Cost",
        fontSize: 18,
      },
      ticks: {
        min: 5,
        max: 35,
        fontSize: 14,
      },
    },
  },
};

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} type="bubble" options={options} />
    </div>
  );
};

export default BubblePlot;
```

</div>
</details>

### 본격적으로 프로젝트를 들어가기에 앞서...

- 프로젝트를 생성 할 때 `npx create-react-app . --template reudx-typescript` 명령어를 통해 새로운 react app을 생성
- axios를 도입하고자 `npm install axios`를 입력했을 때 `8 vulnerabilities (2 low, 1 moderate, 5 high)`라는 메세지가 출력되었고 이는 npm에서 제공하는 `npm audit fix` 명령어를 통해 해결 할 수 있다
- 이번 프로젝트에서 사용할 모듈들을 설치

```
npm install axios
npm audit fix
npm install @material-ui/core
npm install chart.js --save
npm install react-chartjs-2
npm install react-countup
npm install react-icons
```

### Redux의 흐름

<img src="https://user-images.githubusercontent.com/67398691/116842721-7a8a2b00-ac18-11eb-82ce-1721fd1edce9.jpg" width="700" />

- React 컴포넌트에서 **(1) dispatch를 실행하여 state를 변경하는 루트**와 **(2) store의 state를 읽어들이는 루트**가 있다

<img src="https://user-images.githubusercontent.com/67398691/116842751-942b7280-ac18-11eb-8712-c8ba2de36439.jpg" width="700" />

- Redux Tool Kit(RTK)은 복수의 state-reducer 세트(slice)를 가질 수 있다
- useSelector, useDispatch와 같은 RTK 함수를 통해 각각의 slice에 접근하여 slice내 state를 변경하거나 참조할 수 있다

### redux-typescirpt 템플릿에서 제공하는 counterSlice.ts를 뜯어보며 Redux의 개념을 알아보기

```typescript
// /src/features/counter/counterSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./counterAPI";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
} // CounterState의 인터페이스 타입 정의

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter", // slice의 이름 설정
  initialState, // 최초값 설정
  reducers: {
    // action 값들을 설정
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // 컴포넌트에서 사용할 수 있도록 export

export const selectCount = (state: RootState) => state.counter.value; // 컴포넌트에서 state 값을 참조하기 위한 함수

export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
```