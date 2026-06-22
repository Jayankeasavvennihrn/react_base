import { useState } from "react";

interface InputComponentProps {
    defaultValue?: string
}

function InputComponent(probs: InputComponentProps) {
    const [inputValue, setInputValue] = useState(probs.defaultValue ?? "");
    return <>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button >{inputValue ? "Update Name" : "Add"}</button>
    </>;
}

export default InputComponent;