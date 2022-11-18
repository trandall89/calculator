import React from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

const StyledTextField = styled(TextField)({
  width: "100%"
});

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
const other = [" ", "Backspace"];
const validKeys = [...numbers, ...operators, ...other];

export interface DisplayProps extends TextFieldProps {
  valueState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const Display = ({ valueState }: DisplayProps) => {
  const [value, setValue] = valueState;
  const handleKeyDown = (e) => {
    if (!validKeys.includes(e.key)) {
      // suppress the keystroke
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    console.log({ e });
    setValue(e.target.value);
  };

  return (
    <StyledTextField
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={value}
    />
  );
};

export default Display;
