import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();
  return (
    <div className="dark:bg-main-dark-bg bg-white rounded-lg pt-2">
      <ChartComponent
        width={width}
        height={height}
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{
          background: currentMode === "Dark" ? "rgb(32 35 42)" : "white",
        }}
        background={currentMode === "Dark" ? "rgb(32 35 42)" : ""}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
