import React from "react";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between bg-slate-950">
      <div className="text-slate-50 flex">
        <div className="font-bold mr-8">Trading UI</div>
        <div className="flex text-slate-400">
          <div className="mr-4">Trade</div>
          <div>Docs</div>
        </div>
      </div>

      <div className="text-slate-50">Connect Wallet</div>
    </header>
  );
};
