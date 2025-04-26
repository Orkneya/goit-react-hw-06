import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch({ type: "CHANGE", payload: +e.target.value });
  };
  const handlePlus = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleMinus = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);
  return (
    <>
      <h1>{counter}</h1>
      <input value={step} onChange={handleChange} />
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
