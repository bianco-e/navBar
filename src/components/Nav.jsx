import React from "react";
import styled from "styled-components";

export default function App({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
});
