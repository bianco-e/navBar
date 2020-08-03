import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownItems from "./DropdownItems";

export default function RegularButton({ handleClick, items, style, title }) {
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
      {showDropdown && (
        <DropdownItems
          items={items}
          position={{
            top: `${buttonRef.current.offsetHeight - 2}px`,
            left: `${buttonRef.current.offsetLeft}px`,
          }}
          style={style}
        />
      )}
    </>
  );
}

const Button = styled.button({
  backgroundColor: (props) => props.bgColor,
  color: (props) => props.color,
  padding: "1%",
  fontSize: (props) => props.fSize || "15px",
  cursor: "pointer",
  border: "0",
  fontWeight: "800",
  transition: "opacity 0.3s ease",
  ["&:hover"]: {
    opacity: "0.8",
    borderBottom: (props) => `2px solid ${props.hoverColor}`,
    marginBottom: "-2px",
  },
  ["&:active"]: {
    boxShadow: "0 0 1px rgba(200, 200, 200, 0.9)",
  },
});
