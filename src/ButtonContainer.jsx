import CountButton from "./CountButton";

export default function ButtonContainer({ setCount, limit, locked}) {
  return (
    <div className="button-container">
      <CountButton type={"minus"} setCount={setCount} limit={limit} locked={locked} />
      <CountButton type={"plus"} setCount={setCount} limit={limit} locked={locked} />
    </div>
  );
}
