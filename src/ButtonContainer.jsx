import CountButton from "./CountButton";

export default function ButtonContainer({ setCount, limit }) {
  return (
    <div className="button-container">
      <CountButton type={"minus"} setCount={setCount} limit={limit} />
      <CountButton type={"plus"} setCount={setCount} limit={limit} />
    </div>
  );
}
