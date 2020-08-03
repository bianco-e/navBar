import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownItems from "./DropdownItems";

export default function RegularButton({ handleClick, items, title }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    showDropdown && document.addEventListener("click", handleDropdown);
    return () => {
      document.removeEventListener("click", handleDropdown);
    };
  }, [showDropdown]);

  const style = {
    bgColor: "#dc3545",
    color: "#fff",
    hoverColor: "#ff5757",
    size: 3,
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Button
        bgColor={style.bgColor}
        color={style.color}
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
        />
      )}
    </>
  );
}

const Button = styled.button({
  backgroundColor: (props) => props.bgColor,
  color: (props) => props.color,
  padding: "1%",
  fontSize: "15px",
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
    boxShadow: "0 0 2px rgba(200, 200, 200, 0.9)",
  },
});
