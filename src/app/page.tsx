"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-3 p-4 bg-slate-900 flex flex-col">
          <div className="grid grid-cols-2">
            <div className="p-2 bg-green-500">BUY</div>
            <div className="p-2 bg-red-500">SELL</div>
          </div>
          <input
            placeholder="Order Quantity"
            type="number"
            className="h-12 rounded p-2"
          />
          <button className="text-lg p-4 bg-slate-600">Place Order</button>
        </div>
        <Chart />
        <div className="bg-slate-900 col-span-2">3</div>
      </div>
      <main className="h-40">Hello World</main>
    </div>
  );
}
