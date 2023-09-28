const GuessWord = ({ word, hint}) => {
  return (
    <div className="content">
      <div className="word">{word}</div>

      <div className="hint">
        <div className="hint_header">💡 Hint</div>
        <div>{hint}</div>
      </div>
    </div>
  );
};

export default GuessWord;
