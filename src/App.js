import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  console.log("123");

  return (
    <div>
      <button>ADD CASH</button>
      <button>GET CASH</button>
    </div>
  );
}

export default App;
