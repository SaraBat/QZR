/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledCard } from "./styled_components/cards";
import { StyledNextButton } from "./styled_components/buttons";
import { StyledImg } from "./styled_components/image";

const StyledCarousel = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 25px;
`;

const Carousel = () => {
  const [plantSpecies, setPlantSpecies] = useState("");
  const [id, setId] = useState("1");
  const handleChangePicture = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setId(randomNumber);
  };
  useEffect(() => {
    fetch(
      `https://perenual.com/api/species/details/${id}?key=sk-ZK9s6475e57d121041104`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPlantSpecies(data);
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  const pictureUrl = plantSpecies ? plantSpecies.default_image.small_url : "";

  return (
    <StyledCarousel>
      <StyledCard>
        <div className="img-div">
          <StyledImg
            alt="profile"
            className="plantspecies-pic"
            src={pictureUrl}
          />
        </div>
        <StyledNextButton
          type="button"
          onClick={handleChangePicture}
          style={{
            fontSize: "25px",
            fontStyle: "bold",
            padding: "14px 20px",
          }}
        >
          ProssimƏ
        </StyledNextButton>
      </StyledCard>
    </StyledCarousel>
  );
};

export default Carousel;
