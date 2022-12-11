import { useRef } from "react";
import { InputContainer, InputObject } from "./style";

const Input = ({value, ref}) => {
  return (
    <InputContainer>
      <InputObject disabled type="text" value={value} ref={useRef(value.length)} />
    </InputContainer>
  );
}

export default Input;