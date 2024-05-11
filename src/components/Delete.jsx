import { useState } from "react";

const Delete = () => {
  const [id, setId] = useState("");
  return (
    <div>
      <input type="text" placeholder="id" />
    </div>
  );
};

export default Delete;
