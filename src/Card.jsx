import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButton from "./CountButton";

export default function Card() {
    const [count, setCount] = useState(0)
    const limit = 3

    return (
        <div className="card">
            <Title limitReached={count === limit ? true : false} /> 
            <Count count={count}/>
            <ResetButton setCount={setCount} />
            <div className="button-container">
                <CountButton type={"minus"} setCount={setCount} limit={limit} /> 
                <CountButton type={"plus"} setCount={setCount} limit={limit} /> 
            </div>
        </div>
    )
}