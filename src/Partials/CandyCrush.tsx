import { useEffect, useState } from "react";

const width = 8;

const candyColors = ["green", "blue", "yellow", "purple", "hotpink"];

const CandyCrush = () => {
  const [colors, setColors] = useState([""]);

  const CreateBoard = () => {
    const colorArray = [];

    for (let i = 0; i < width * width; i++) {
      const candyColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      colorArray.push(candyColor);
    }

    setColors(colorArray);
  };

  useEffect(() => {
    CreateBoard();
  }, []);

  return (
    <>
      <h1>CandyCrush</h1>
      <section className="game-board">
        {colors.map((color, index) => (
          <img key={index} 
          style={{backgroundColor: color}}
          ></img>
        ))}
      </section>
    </>
  );
};

export default CandyCrush;
