const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{`Vous avez ${count} ${name}${count > 1 ? "s" : ""}`}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Counter