const Put = () => {
  const [id, setId] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
  );
};

export default Put;
