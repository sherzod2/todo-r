import { React } from "react";
import "./App.css";
import Todos from "./components/todos/todos";

function App() {
  // const [datas, setDatas] = [];

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, [datas]);
  return (
    <main>
      <section className="sec">
        <Todos />
        {/* {datas.map((data) => console.log(data))} */}
      </section>
    </main>
  );
}

export default App;
