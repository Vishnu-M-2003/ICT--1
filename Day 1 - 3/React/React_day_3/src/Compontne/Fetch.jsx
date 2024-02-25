import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {data.map((post) => {
        return (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        );
      })}
    </div>
  );
}
