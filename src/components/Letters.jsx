import letters from "../data/lettersData";
import { useState } from "react";

const Letters = ({
  word,
  setIncorrect,
  setWordFormat,
  setIncorrectLetters,
}) => {
  const [isWrongLetter, setIsWrongLetter] = useState(false);

  const handleLetterClick = (btn) => {
    btn.disabled = true;

    if (!word.includes(btn.letter?.toLowerCase())) {
      setIsWrongLetter(true);
      setIncorrect((incorrect) => incorrect + 1);
      setIncorrectLetters((prev) => [...prev, btn.letter]);
    } else {
      setWordFormat((prev) => {
        return word
          .split("")
          .map((item, index) =>
            btn.letter.toLowerCase() === item
              ? item.toUpperCase()
              : prev.split(" ")[index]
          )
          .join(" ");
      });
    }
  };

  return (
    <div className="letters">
      {letters.map((btn) => (
        <button
          key={btn.id}
          onClick={() => handleLetterClick(btn)}
          disabled={btn.disabled}
        >
          {btn.letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
