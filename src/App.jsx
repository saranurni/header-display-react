import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Header name={name} />
      <Form />{" "}
    </>
  );
}

export default App;
