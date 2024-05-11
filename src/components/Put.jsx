import axios from "axios";
import { useState } from "react";

const Put = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const updateHandler = () => {
    axios
      .patch(`shttps://jsonplaceholder.typicode.com/posts/${id}`, { title })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={updateHandler}>Update</button>
    </div>
  );
};

export default Put;
