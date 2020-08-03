import React from "react";
import Nav from "./components/Nav";
import NavButton from "./components/NavButton";

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
    <>
      <Nav>
        {buttons.map((button) => {
          return (
            <NavButton
              key={button}
              title={button}
              handleClick={onClickFn}
              style={style}
            />
          );
        })}
        <NavButton title="SERVICIOS" items={items} style={style} />
      </Nav>
    </>
  );
}
