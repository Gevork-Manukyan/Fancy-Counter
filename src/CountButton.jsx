import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, limit, locked }) {
  const onClickHandler = (event) => {
    setCount((prev) => {
      if (type === "minus" && prev > 0) return prev - 1;
      else if (type === "plus" && prev < limit) return prev + 1;
      else return prev;
    });

    // unfocus the button after clicking (so it doesn't interfer with keyboard events)
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={onClickHandler}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
