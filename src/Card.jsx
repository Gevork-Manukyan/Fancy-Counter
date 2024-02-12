import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
    const [count, setCount] = useState(0)
    const limit = 5
    const locked = count === limit ? true : false;

    return (
        <div className={`card ${locked ? "card--limit" : ""}`}>
            <Title limitReached={locked} /> 
            <Count count={count}/>
            <ResetButton setCount={setCount} />
            <ButtonContainer setCount={setCount} limit={limit} locked={locked} />
        </div>
    )
}