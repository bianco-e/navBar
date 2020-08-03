import React from "react";
import styled from "styled-components";

export default function DropdownItems({ items, position }) {
  return (
    <Container top={position.top} left={position.left}>
      {items.map((item) => (
        <Item key={item.name}>
          <Link href={item.to}>{item.name}</Link>
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.section({
  alignItems: "flex-start",
  backgroundColor: "white",
  border: "1px solid rgba(200, 200, 200, .3)",
  boxShadow: "0 0 7px rgba(170, 170, 170, .3)",
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
const Link = styled.a({
  color: "black",
  textDecoration: "none",
});
