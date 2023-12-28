import GuessWord from "./components/GuessWord";
import Letters from "./components/Letters";
import "./App.css";
import { useEffect, useState } from "react";
import wordList from "./data/wordsData";
import Hangman from "./components/Hangman";
import IncorrectGuesses from "./components/IncorrectGuesses";
import WinModal from "./components/WinModal";
import LoseModal from "./components/LoseModal";
import Score from "./components/Score";
import letters from "./data/lettersData";

const App = () => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordFormat, setWordFormat] = useState("");
  const [incorrect, setIncorrect] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [lostGame, setLostGame] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const newWord = Math.floor(Math.random() * wordList.length);
    setWord(() => wordList[newWord]?.word);
    setHint(() => wordList[newWord]?.hint);
    setWordFormat(() => "_ ".repeat(wordList[newWord]?.word.length));
  }, []);

  useEffect(() => {
    const checkIfWon = wordFormat.split(" ").every((item) => item !== "_");
    if (checkIfWon) {
      setWonGame((prev) => !prev);
    }
  }, [wordFormat]);

  useEffect(() => {
    if (incorrect === 6) {
      setLostGame((prev) => !prev);
    }
  }, [incorrect]);

  const getWordFormatSetter = (value) => {
    setWordFormat(value);
  };

  const getIncorrectSetter = (value) => {
    setIncorrect(value);
  };

  const getIncorrectLettersSetter = (value) => {
    setIncorrectLetters(value);
  };

  const newGameBtnHandler = (score) => {
    const newWord = Math.floor(Math.random() * wordList.length);
    setWord(() => wordList[newWord]?.word);
    setHint(() => wordList[newWord]?.hint);
    setWordFormat(() => "_ ".repeat(wordList[newWord]?.word.length));
    setIncorrect(0);
    setIncorrectLetters([]);
    setLostGame(() => false);
    setWonGame(() => false);
    setScore((prev) => prev + score);
    letters.map((letter) => (letter.disabled = false));
  };

  return (
    <>
      {wonGame && <WinModal newGameBtnHandler={newGameBtnHandler} />}
      {lostGame && (
        <LoseModal newGameBtnHandler={newGameBtnHandler} word={word} />
      )}
      <div className="score">
        <Score score={score} />
      </div>
      <div className="container">
        <Hangman incorrect={incorrect} />

        <div className="main">
          <GuessWord word={wordFormat} hint={hint} />

          <IncorrectGuesses
            incorrect={incorrect}
            incorrectLetters={incorrectLetters}
          />

          <Letters
            word={word}
            getWordFormatSetter={getWordFormatSetter}
            getIncorrectSetter={getIncorrectSetter}
            getIncorrectLettersSetter={getIncorrectLettersSetter}
          />
        </div>
      </div>
    </>
  );
};

export default App;
