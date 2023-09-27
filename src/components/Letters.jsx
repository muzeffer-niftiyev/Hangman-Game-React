import letters from "../lettersData";
import { useState } from "react";

const Letters = ({ word, setIncorrect, setWordFormat, wordFormat }) => {
  const [isWrongLetter, setIsWrongLetter] = useState(false);

  const handleLetterClick = (btn) => {
    btn.disabled = true;

    if (!word.includes(btn.letter?.toLowerCase())) {
      setIsWrongLetter(true);
      setIncorrect((incorrect) => incorrect + 1);
    } else {
      setWordFormat((prev) => {
        return word
          .split("")
          .map((item, index) =>
            item === btn.letter.toLowerCase() ? item.toUpperCase() : prev[index]
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
