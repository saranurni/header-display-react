import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Profile from "./components/Profile/Profile";

const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <h1 className="my-8 text-center text-3xl"> Hello {name}</h1>
      <Form setName={setName} />
      {name && <Profile name={name} imgUrl={imgUrl} />}
    </>
  );
}

export default App;
