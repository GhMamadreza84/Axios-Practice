import { useState } from "react";

import axios from "axios";

const Post = () => {
  const [title, setTitle] = useState("");

  const postHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={postHandler}>Create Title</button>
    </div>
  );
};

export default Post;
