import { useState } from "react";

const IncorrectGuesses = ({ incorrect, incorrectLetters }) => {
  return (
    <>
      <div className="incorrect">
        Incorrect guesses: <span>{incorrect} / 6</span>
      </div>

      <div className="incorrect_letters">
        {incorrectLetters.map((letter) => {
          return (
            <div className="incorrect_letter">
              <p>{letter}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IncorrectGuesses;
