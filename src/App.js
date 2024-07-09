/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
/* eslint-disable max-len */
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data.json";
import Carousel from "./components/Carousel";

import "./index.css";

/* Ideas for questions:
Modulus, patterns?
Data types in JS
Can you enumerate all JavaScript data types?
What is NaN?
List elements in HTML, ul, ol, etc.
WCAG guidelines - arialabels?
NPM package?
What is Bootstrap? What is tailwind?
What is boilerplate code?
*/

export const App = () => {
  const [randomNumber, setRandomNumber] = useState(0); // initialize with initial value of 0
  const [showQuestion, setShowQuestion] = useState(true); // State for showing question
  const [showAnswer, setShowAnswer] = useState(false); // State for showing answer

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * data.questions.length);
    setRandomNumber(newRandomNumber);
    setShowQuestion(true);
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="HomePage">
        <div className="MainLeft">
          <Main
            randomQuestion={data.questions[randomNumber]}
            showQuestion={showQuestion}
            setShowQuestion={setShowQuestion}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            generateRandomNumber={generateRandomNumber}
          />
        </div>
        <div className="MainRight">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
