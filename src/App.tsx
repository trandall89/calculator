import { Container, Grid } from "@mui/material";
import React from "react";
import { Display, Keypad } from "./components";

export default function App() {
  const valueState = React.useState("");

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" spacing={8}>
        <Grid item xs="auto">
          <Display valueState={valueState} />
        </Grid>
        <Keypad valueState={valueState} />
      </Grid>
    </Container>
  );
}
