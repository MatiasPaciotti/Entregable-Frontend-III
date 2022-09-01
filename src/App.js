import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {

  const [ counter, setCounter ] = useState(0)

  return (
    <div className="App">
      <Cabecera counter={counter} />
      <Listado counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
