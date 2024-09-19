"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export const Chart = () => {
  return (
    <div className="col-span-7 h-[40rem]">
      <AdvancedRealTimeChart
        theme="dark"
        symbol="BTCUSD"
        autosize
        height={"1000"}
      ></AdvancedRealTimeChart>
    </div>
  );
};
