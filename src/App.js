import "./App.css";
import response from "./data.json";
import Charts from "./Charts";
import spinner from "./spinner.gif";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setLoading(false);
      setData(response);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <img src={spinner} alt="Loading" height={400} width={400} />
      ) : (
        data.charts.map((i, index) => <Charts response={i} key={index} />)
      )}
    </div>
  );
}

export default App;
