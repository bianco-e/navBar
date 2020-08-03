import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function DropdownItems({ items, position }) {
  return (
    <Container top={position.top} left={position.left}>
      {items.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </Container>
  );
}

const Container = styled.section({
  alignItems: "flex-start",
  border: "1px solid rgba(200, 200, 200, .3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  left: (props) => props.left,
  overflow: "hidden",
  position: "absolute",
  top: (props) => props.top,
});
const Item = styled.section({
  cursor: "pointer",
  fontSize: "14px",
  margin: "0",
  padding: ".5rem",
  transition: "opacity 0.3 ease-in-out",
  width: "100%",
  ["&:hover"]: {
    backgroundColor: "rgba(200, 200, 200, .3)",
    opacity: "0.8",
  },
  ["&:active"]: {
    backgroundColor: "#ff5757",
  },
});
