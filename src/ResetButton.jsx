import { ResetIcon } from "@radix-ui/react-icons";


export default function ResetButton({ setCount }) {
    const onClickHandler = (event) => {
        setCount(0)

        // unfocus the button after clicking (so it doesn't interfer with keyboard events)
        event.currentTarget.blur()
    }
    
    return (
        <button className="reset-btn" onClick={onClickHandler}>
            <ResetIcon className="reset-btn-icon" />
        </button>
    )
}