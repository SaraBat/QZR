/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import FlashCard from "./FlashCard";

const StyledMain = styled.div`
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

// eslint-disable-next-line max-len
const Main = ({
  showQuestion,
  setShowQuestion,
  randomQuestion,
  showAnswer,
  setShowAnswer,
  generateRandomNumber,
}) => {
  return (
    <StyledMain>
      <FlashCard
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        answer={randomQuestion.answer}
        question={randomQuestion.question}
        generateRandomNumber={generateRandomNumber}
      />
    </StyledMain>
  );
};

export default Main;
