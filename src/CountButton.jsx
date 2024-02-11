import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, limit }) {
    
    const onClickHandler = (type) => {
        setCount(prev => {
            if (type === "minus" && prev > 0) return prev - 1
            else if (type === "plus" && prev < limit) return prev + 1
            else return prev
        })
    }
    
    return (        
        <button className="count-btn" onClick={() => onClickHandler(type)}>
            {type === "minus" ?
                <MinusIcon className="count-btn-icon" />
            :
                <PlusIcon className="count-btn-icon" />
            }
        </button>
    )
}