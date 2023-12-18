import { ChangeEventHandler } from "react";

interface Props {
    value?: string;
    type?: 'text';
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type = 'text', placeholder, value, onChange }: Props) => {
    return (
      <input value={value} type={type} placeholder={placeholder} onChange={onChange} className="input"/>
    )
}

export default Input;
