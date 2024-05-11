import { useState } from "react";

const Delete = () => {
  const [id, setId] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Delete;
