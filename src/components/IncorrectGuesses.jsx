const IncorrectGuesses = ({ incorrect, incorrectLetters }) => {
  return (
    <>
      <div className="incorrect">
        Incorrect guesses: <span>{incorrect} / 6</span>
      </div>

      <div className="incorrect_letters">
        {incorrectLetters.map((letter) => {
          return (
            <div key={letter.id} className="incorrect_letter">
              <p>{letter.letter}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IncorrectGuesses;
