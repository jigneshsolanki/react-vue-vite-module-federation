import useCounter from "./store";

function Counter() {
  const counter = useCounter((state) => state.counter);
  const increaseCounter = useCounter((state) => state.increaseCounter);
  return (
    <button style={{ color: "green" }} onClick={increaseCounter}>
      count is {counter}
    </button>
  );
}

export default Counter;
