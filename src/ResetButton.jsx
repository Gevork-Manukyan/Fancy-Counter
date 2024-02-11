import { ResetIcon } from "@radix-ui/react-icons";


export default function ResetButton({ setCount }) {
    const onClickHandler = () => {
        setCount(0)
    }
    
    return (
        <button className="reset-btn" onClick={onClickHandler}>
            <ResetIcon className="reset-btn-icon" />
        </button>
    )
}