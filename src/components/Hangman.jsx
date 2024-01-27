import { useState, useEffect } from "react";
import img_0 from "../images/hangman-0.svg";
import img_1 from "../images/hangman-1.svg";
import img_2 from "../images/hangman-2.svg";
import img_3 from "../images/hangman-3.svg";
import img_4 from "../images/hangman-4.svg";
import img_5 from "../images/hangman-5.svg";
import img_6 from "../images/hangman-6.svg";

const imgArr = [img_0, img_1, img_2, img_3, img_4, img_5, img_6];

const Hangman = ({ incorrect }) => {
  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(() => imgArr[incorrect]);
  }, [incorrect]);

  return <img src={img} alt="" />;
};

export default Hangman;

