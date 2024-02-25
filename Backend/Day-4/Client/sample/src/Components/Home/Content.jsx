import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Content() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const send = async () => {
    const response = await axios.post("http://localhost:5000/post", {
      name,
      password,
    });
    console.log(response);
    navigate("/login");
  };

  return (
    <div>
      <h1>Hello : {name}</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button onClick={send}>Click</button>
    </div>
  );
}

export default Content;
