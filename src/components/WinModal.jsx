const WinModal = ({ newGameBtnHandler }) => {
  return (
    <>
      <div className="win_modal">
        <h3>Well Done!</h3>
        <p>You got +20 points</p>
        <button onClick={() => newGameBtnHandler(20)}>New Game</button>
      </div>

      <div className="overlay" />
    </>
  );
};

export default WinModal;
