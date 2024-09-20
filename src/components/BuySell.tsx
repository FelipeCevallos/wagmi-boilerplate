import React, { useState } from "react";

type tradingState = "Long" | "Short";
export const BuySell = () => {
  const [buySell, setBuySell] = useState<tradingState>("Long");
  return (
    <div className="col-span-3 p-4 bg-slate-900 flex flex-col m-4">
      <div className="grid grid-cols-2 bg-slate-950 rounded-md mb-4 cursor-pointer">
        <div
          onClick={() => setBuySell("Long")}
          className={`p-2 rounded-md text-center text-slate-100 font-medium ${
            buySell === "Long" ? "bg-blue-700" : ""
          }`}
        >
          Long
        </div>
        <div
          onClick={() => setBuySell("Short")}
          className={`p-2 text-slate-100 font-medium rounded-md text-center ${
            buySell === "Short" ? "bg-blue-700" : ""
          }`}
        >
          Short
        </div>
      </div>
      {/* Input Field */}
      <div className="bg-slate-800 mb-4 p-4 rounded-md">
        <div className="flex justify-between mb-2">
          <div className="text-slate-400 text-sm">Pay</div>
          <div className="text-slate-400 text-sm">Balance 0.00</div>
        </div>
        <div className="flex justify-between items-center">
          <input
            placeholder="0.00"
            type="number"
            className="h-12 rounded bg-transparent text-2xl text-slate-300 max-w-44"
          />
          <div className="rounded-full text-slate-200 text-md p-1 border border-slate-700 px-3 hover:bg-slate-600 cursor-pointer">
            USDC
          </div>
        </div>
      </div>
      {/* Output Field */}
      <div className="bg-slate-800 mb-4 p-4 rounded-md">
        <div className="flex justify-between mb-2">
          <div className="text-slate-400 text-sm">{buySell}</div>
          <div className="text-slate-400 text-sm">Balance 0.00</div>
        </div>
        <div className="flex justify-between items-center">
          <input
            placeholder="0.00"
            type="number"
            className="h-12 rounded bg-transparent text-2xl text-slate-300 max-w-44"
          />
          <div className="rounded-full text-slate-200 text-md p-1 border border-slate-700 px-3 hover:bg-slate-600 cursor-pointer">
            BTC
          </div>
        </div>
      </div>

      <button className="text-lg p-4 bg-slate-600 rounded-md cursor-pointer">
        Confirm
      </button>
    </div>
  );
};
