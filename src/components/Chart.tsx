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
    <div className="col-span-9 h-[40rem] m-4">
      <RealTimeChartNoSSR
        symbol="BTCUSD"
        theme="dark"
        autosize
        height={"100"}
      ></RealTimeChartNoSSR>
    </div>
  );
};
