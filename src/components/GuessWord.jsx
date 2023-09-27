import { useEffect, useState } from "react";

const GuessWord = ({ word, hint, incorrect }) => {
  return (
    <div className="content">
      <div className="word">{word}</div>

      <div className="hint">
        <div className="hint_header">💡 Hint</div>
        <div>{hint}</div>
      </div>

      <div className="incorrect">
        Incorrect guesses: <span>{incorrect} / 6</span>
      </div>
    </div>
  );
};

export default GuessWord;
