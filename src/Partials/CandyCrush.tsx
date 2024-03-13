import { useEffect, useState } from "react";

type Color = "green" | "blue" | "yellow"| "purple" | "hotpink";

const width = 8;

const candyColors: Color[] = ["green", "blue", "yellow", "purple", "hotpink"];

const CandyCrush = () => {
  const [colors, setColors] = useState<Color[]>([]);

  const CreateBoard = () => {
    const colorArray: Color[] = [];

    for (let i = 0; i < width * width; i++) {
      const candyColor: Color =
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
        {colors.map((color: Color, index) => (
          <img key={index} 
          style={{backgroundColor: color}}
          ></img>
        ))}
      </section>
    </>
  );
};

export default CandyCrush;
