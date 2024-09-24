import React, { useEffect, useState } from "react";

const Index = () => {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb (${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => settypeOfColor("hex")} style={{ color: "white" }}>
        Create HEX color
      </button>
      <button onClick={() => settypeOfColor("rgb")} style={{ color: "white" }}>
        Create RGB color
      </button>
      <button
        onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
        style={{ color: "white" }}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Index;
