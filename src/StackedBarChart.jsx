import React from "react";
import {
  XYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries
} from "react-vis";
import "react-vis/dist/style.css";

const StackedBarChart = () => {
  return (
    <React.Fragment>
      <h1>Stacked Bar Chart</h1>
      <XYPlot
        className="clustered-stacked-bar-chart-example"
        xType="ordinal"
        stackBy="y"
        width={300}
        height={300}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          cluster="2015"
          color="#FF6347"
          data={[
            { x: "Q1", y: 10 },
            { x: "Q2", y: 5 },
            { x: "Q3", y: 15 },
            { x: "Q4", y: 20 }
          ]}
        />
        <VerticalBarSeries
          cluster="2015"
          color="#008000"
          data={[
            { x: "Q1", y: 3 },
            { x: "Q2", y: 7 },
            { x: "Q3", y: 2 },
            { x: "Q4", y: 1 }
          ]}
        />
        {/*<VerticalBarSeries
          cluster="2016"
          color="#12939A"
          data={[
            { x: "Q1", y: 3 },
            { x: "Q2", y: 8 },
            { x: "Q3", y: 11 },
            { x: "Q4", y: 19 }
          ]}
        />
        <VerticalBarSeries
          cluster="2016"
          color="#79C7E3"
          data={[
            { x: "Q1", y: 22 },
            { x: "Q2", y: 2 },
            { x: "Q3", y: 22 },
            { x: "Q4", y: 18 }
          ]}
        />*/}
      </XYPlot>
    </React.Fragment>
  );
};

export default StackedBarChart;
