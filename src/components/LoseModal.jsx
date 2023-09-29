const LoseModal = ({ newGameBtnHandler, word }) => {
  return (
    <>
      <div className="lose_modal">
        <h3>Failed!</h3>
        <p>The answer was {word?.toUpperCase()}</p>
        <p>You got -10 points</p>
        <button onClick={() => newGameBtnHandler(-10)}>New Game</button>
      </div>

      <div className="overlay" />
    </>
  );
};

export default LoseModal;
