import React from "react";
import { Button, Grid } from "@mui/material";

const BUTTON_SPACING = 3;

// Found this here https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
const evalMath = (value: string): string => {
  const sanitizedValue = value.replace(/[^-()\d/*+.]/g, "");
  const isString = typeof value === "string";
  const hasLength = sanitizedValue.length > 0;
  if (isString && hasLength) {
    return new Function(`return ${sanitizedValue}`)();
  }
  return "";
};

function KeypadRow({ children }) {
  return (
    <Grid container item justifyContent="center" spacing={BUTTON_SPACING}>
      {React.Children.map(children, (child) => (
        <Grid item>{child}</Grid>
      ))}
    </Grid>
  );
}

function Keypad({ valueState }) {
  const [value, setValue] = valueState;
  return (
    <Grid container direction="column" item spacing={BUTTON_SPACING} xs>
      <KeypadRow>
        <Button onClick={() => setValue("")} variant="contained">
          C
        </Button>
        <Button variant="contained">()</Button>
        <Button variant="contained">%</Button>
        <Button variant="contained">/</Button>
      </KeypadRow>
      <KeypadRow>
        <Button onClick={() => setValue(`${value}1`)} variant="contained">
          1
        </Button>
        <Button onClick={() => setValue(`${value}2`)} variant="contained">
          2
        </Button>
        <Button onClick={() => setValue(`${value}3`)} variant="contained">
          3
        </Button>
        <Button variant="contained">X</Button>
      </KeypadRow>
      <KeypadRow>
        <Button onClick={() => setValue(`${value}4`)} variant="contained">
          4
        </Button>
        <Button onClick={() => setValue(`${value}5`)} variant="contained">
          5
        </Button>
        <Button onClick={() => setValue(`${value}6`)} variant="contained">
          6
        </Button>
        <Button variant="contained">-</Button>
      </KeypadRow>
      <KeypadRow>
        <Button onClick={() => setValue(`${value}7`)} variant="contained">
          7
        </Button>
        <Button onClick={() => setValue(`${value}8`)} variant="contained">
          8
        </Button>
        <Button onClick={() => setValue(`${value}9`)} variant="contained">
          9
        </Button>
        <Button variant="contained">+</Button>
      </KeypadRow>
      <KeypadRow>
        <Button variant="contained">+/-</Button>
        <Button onClick={() => setValue(`${value}0`)} variant="contained">
          0
        </Button>
        <Button variant="contained">.</Button>
        <Button variant="contained">=</Button>
      </KeypadRow>
    </Grid>
  );
}

export default Keypad;
