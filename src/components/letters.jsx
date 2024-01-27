import letters from "../data/lettersData";

const Letters = ({
  word,
  getIncorrectSetter,
  getWordFormatSetter,
  getIncorrectLettersSetter,
}) => {
  const handleLetterClick = (btn) => {
    btn.disabled = true;

    if (!word.includes(btn.letter?.toLowerCase())) {
      getIncorrectSetter((incorrect) => incorrect + 1);
      getIncorrectLettersSetter((prev) => [
        ...prev,
        { letter: btn.letter, id: btn.id },
      ]);
    } else {
      getWordFormatSetter((prev) => {
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

