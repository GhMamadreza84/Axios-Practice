
const Put = () => {
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
}

export default Put;