import { FC } from 'react';

export interface ButtonProps {
  buttonText: string,
  buttonColor: string,
}

const Button: FC<ButtonProps> = (props) => {
  const { buttonColor, buttonText } = props;
  return (
    <button className={`uam_button ${props.buttonColor}`}>
      {buttonText}
    </button>
  );
};

export default Button;
