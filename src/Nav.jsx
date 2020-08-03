import React, { useState } from "react";
import styled from "styled-components";
import RegularButton from "./components/RegularButton";

export default function App() {
  const buttons = ["INICIO", "INFORMACIÓN", "NOSOTROS", "CONTACTO"];

  const items = [
    "Prueba 1",
    "Prueba 2",
    "Prueba 3",
    "Pruebita del corazón seis mil novecientos diecisiete",
  ];

  return (
    <Container>
      {buttons.map((button) => {
        return <RegularButton key={button} title={button} />;
      })}
      <RegularButton
        handleClick="dropdown"
        title="NUESTROS SERVICIOS"
        items={items}
      />
    </Container>
  );
}

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-start",
  maxWidt: "1024px",
  width: (props) => props.width,
});
