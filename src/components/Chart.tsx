"use client";

import dynamic from "next/dynamic";
const RealTimeChartNoSSR = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

export const Chart = () => {
  return (
    <div className="col-span-7 h-[40rem]">
      <RealTimeChartNoSSR
        symbol="BTCUSD"
        theme="dark"
        autosize
        height={"100"}
      ></RealTimeChartNoSSR>
    </div>
  );
};
