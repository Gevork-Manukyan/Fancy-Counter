import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
    const [count, setCount] = useState(0)
    const limit = 3

    return (
        <div className="card">
            <Title limitReached={count === limit ? true : false} /> 
            <Count count={count}/>
            <ResetButton setCount={setCount} />
            <ButtonContainer setCount={setCount} limit={limit} />
        </div>
    )
}