import { useState } from "react";

interface InputComponentProps {
    defaultValue?: string,
    onSave: (value: string) => void
}

function InputComponent(props: InputComponentProps) {
    const [inputValue, setInputValue] = useState(props.defaultValue ?? "");
    return <>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => props.onSave(inputValue)}>{inputValue ? "Update Name" : "Add"}</button>
    </>;
}

export default InputComponent;