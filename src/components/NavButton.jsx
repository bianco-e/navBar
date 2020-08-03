import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownItems from "./DropdownItems";

export default function NavButton({ handleClick, items, style, title }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    showDropdown && document.addEventListener("click", handleDropdown);
    return () => {
      document.removeEventListener("click", handleDropdown);
    };
  }, [showDropdown]);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {showDropdown ? (
        <Container>
          <Button
            bgColor={style.bgColor}
            color={style.color}
            fSize={`${style.size}px`}
            hoverColor={style.hoverColor}
            minHeight={`${buttonRef.current.offsetHeight}px`}
            minWidth={`${buttonRef.current.offsetWidth}px`}
            onClick={items ? handleDropdown : handleClick}
            ref={buttonRef}
          >
            {title}
          </Button>
          <DropdownItems items={items} style={style} />
        </Container>
      ) : (
        <Button
          bgColor={style.bgColor}
          color={style.color}
          fSize={`${style.size}px`}
          hoverColor={style.hoverColor}
          onClick={items ? handleDropdown : handleClick}
          ref={buttonRef}
        >
          {title}
        </Button>
      )}
    </>
  );
}

const Container = styled.section({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});
const Button = styled.button({
  backgroundColor: (props) => props.bgColor,
  border: "0",
  color: (props) => props.color,
  cursor: "pointer",
  fontSize: (props) => props.fSize || "15px",
  fontWeight: "800",
  minHeight: (props) => props.minHeight,
  minWidth: (props) => props.minWidth,
  padding: "1em",
  transition: "opacity 0.3s ease",
  transition: "box-shadow 0.2s ease",
  ["&:hover"]: {
    boxShadow: (props) => `inset 0 -3px 1px ${props.hoverColor}`,
    opacity: "0.8",
  },
  ["&:active"]: {
    boxShadow: "0 0 1px rgba(200, 200, 200, 0.9)",
  },
});
