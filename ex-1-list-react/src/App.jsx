import "./App.css";
import { Colors } from "./components/Colors";

function App() {
  // const color = {
  //   id: 1,
  //   name: "black",
  // };

  const colors = [
    {
      id: 1,
      name: "white",
    },
    {
      id: 2,
      name: "yellow",
    },
    {
      id: 3,
      name: "green",
    },
    {
      id: 4,
      name: "grey",
    },
    {
      id: 5,
      name: "blue",
    },
  ];
  return (
    <>
      <Colors colors={colors}></Colors>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
