import React from "react";
import styled from "styled-components";
import RegularButton from "./components/RegularButton";

export default function App() {
  const buttons = ["INICIO", "INFORMACIÓN", "NOSOTROS", "CONTACTO"];

  const items = [
    { name: "Prueba 1", to: "https://www.google.com.ar" },
    { name: "Prueba 2", to: "https://www.wikipedia.com.ar" },
    { name: "Prueba 3", to: "https://www.google.com.ar" },
    {
      name: "Pruebita del corazón seis mil novecientos diecisiete",
      to: "https://www.google.com.ar",
    },
  ];

  const onClickFn = () => {};

  const style = {
    bgColor: "#dc3545",
    color: "#fff",
    hoverColor: "#ff5757",
    size: 12,
  };

  return (
    <Container>
      {buttons.map((button) => {
        return (
          <RegularButton
            key={button}
            title={button}
            handleClick={onClickFn}
            style={style}
          />
        );
      })}
      <RegularButton title="SERVICIOS" items={items} style={style} />
    </Container>
  );
}

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-start",
  position: "relative",
  width: (props) => props.width,
});
