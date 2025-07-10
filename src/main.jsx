// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ManualDetic from "./ManualDetic";
import Neurotipo from "./Neurotipo";

const App = () => (
  <div className="bg-black min-h-screen text-white">
    <h1 className="text-4xl font-black text-center py-6">DETIC — Interface Visual</h1>
    <div className="grid md:grid-cols-2 gap-8 p-4">
      <div>
        <ManualDetic />
      </div>
      <div>
        <Neurotipo />
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
