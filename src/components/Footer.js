/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import { StyledNextButton } from "./styled_components/buttons.js";

const StyledFooter = styled.div`
  background-color: transparent;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  width: 100%;
  height: 150px;
  position: relative;
  top: 0;
  left: 0;
`;

const Footer = ({ generateRandomNumber }) => {
  const handleNextQuestion = () => {
    generateRandomNumber(); // call the generateRandomNumber function when the button is clicked
  };

  return (
    <StyledFooter>
      <StyledNextButton
        type="button"
        onClick={handleNextQuestion}
        style={{ fontSize: "25px", fontStyle: "bold", padding: "14px 20px" }}
      >
        Next question
      </StyledNextButton>
    </StyledFooter>
  );
};

export default Footer;
