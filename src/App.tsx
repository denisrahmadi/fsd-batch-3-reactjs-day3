import React, { useState } from "react";
import Typography from "./Components/Typography";



// TUGAS REACT JS DAY3 NOMOR 1
const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const AddCounter = () => {
    const penambah = counter + 1;
    setCounter(penambah);
  };

  const RemoveCounter = () => {
    const pengurang = counter - 1;
    setCounter(pengurang);
  };

  const ResetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="text-center font-bold">
        <h1 className="">Function Component</h1>
        <p>Ini merupakan function component dari react</p>
        <p>Counter : {counter}</p>
        <button
          className="px-3 m-3 text-2xl rounded bg-green-500 opacity-100 hover:opacity-50"
          onClick={AddCounter}
        >
          Tambah
        </button>
        <button
          className="px-3 m-3 text-2xl rounded bg-red-500 opacity-100 hover:opacity-50"
          onClick={ResetCounter}
        >
          Reset
        </button>
        <button
          className="px-3 m-3 text-2xl rounded bg-yellow-500 opacity-100 hover:opacity-50"
          onClick={RemoveCounter}
        >
          Kurang
        </button>
        <Typography/>
      </div>
    </>
  );
}

export default App;
