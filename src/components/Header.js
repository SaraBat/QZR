/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #fbf334;
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

const StyledHeading = styled.h1`
  color: black;
  text-decoration: solid;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  max-width: 300px;
  @media (max-width: 667px) {
    font-size: 26px;
    margin-top: 10px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeading>Collezionabile</StyledHeading>
    </StyledHeader>
  );
};

export default Header;
