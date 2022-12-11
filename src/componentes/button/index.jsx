import { ButtonContainer, ButtonObject } from "./style";

const Button = ({title, size, bgColor, onClick}) => {
  return (
    <ButtonContainer size={size}>
      <ButtonObject bgColor={bgColor} onClick={onClick}>
        {title}
      </ButtonObject>
    </ButtonContainer>
  );
}

export default Button;