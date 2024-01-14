import "./App.scss";
import "boxicons/css/boxicons.min.css";
import Button from "./components/button/Button";
import { useState,useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const counter = setTimeout((val) => {
      setLoading(!val);
    }, 2000);
    return () => clearTimeout(counter);
  }, []);
  return (
    <div className="App">
      <Button loading={loading} onClick={() => setLoading(!loading)}>
        Loading
      </Button>
    </div>
  );
}
export default App;
