import { useEffect, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const limit = 5;
  const locked = count === limit ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space" && count < limit) setCount((prev) => prev + 1);
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title limitReached={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type={"minus"} setCount={setCount} limit={limit} locked={locked} />
        <CountButton type={"plus"} setCount={setCount} limit={limit} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
