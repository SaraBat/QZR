/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable max-len */
import React from "react";
import { StyledAnswerButton } from "./styled_components/buttons.js";
import {
  StyledCard,
  StyledH2,
  StyledH3,
  StyledP,
} from "./styled_components/cards.js";

const FlashCard = ({
  question,
  answer,
  showQuestion,
  setShowQuestion,
  showAnswer,
  setShowAnswer,
}) => {
  // Function to toggle showing answer
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setShowQuestion(false);
    const cardElement = document.getElementById("flashcardA");
    cardElement.classList.add("animate");
    setTimeout(() => {
      cardElement.classList.remove("animate");
    }, 500); // Duration of the animation in milliseconds
  };

  // Function to go back to showing question
  const goBackToQuestion = () => {
    setShowAnswer(false);
    setShowQuestion(true);
    const cardElement = document.getElementById("flashcardQ");
    cardElement.classList.add("animate-reverse");
    setTimeout(() => {
      cardElement.classList.remove("animate-reverse");
    }, 500); // Duration of the animation in milliseconds
  };

  return (
    <>
      {showQuestion && (
        <div className="Question">
          <StyledCard
            showQuestion={showQuestion}
            id="flashcardQ"
            className={showQuestion ? "animate" : "animate-reverse"}
          >
            <StyledH2>?</StyledH2>
            <StyledH3>{question}</StyledH3>
            <StyledAnswerButton type="button" onClick={toggleAnswer}>
              ⇨
            </StyledAnswerButton>
          </StyledCard>
        </div>
      )}
      {showAnswer && (
        <div className="Answer">
          <StyledCard
            showAnswer={showAnswer}
            id="flashcardA"
            className={showAnswer ? "animate" : "animate-reverse"}
          >
            <StyledH2>!</StyledH2>
            {answer.map((item) => (
              <StyledP key={item.page}>{item.content}</StyledP>
            ))}
            <StyledAnswerButton
              type="button"
              onClick={goBackToQuestion}
              style={{ margin: "10px" }}
            >
              ⇦
            </StyledAnswerButton>
          </StyledCard>
        </div>
      )}
    </>
  );
};

export default FlashCard;
