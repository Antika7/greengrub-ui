import React, { useState } from "react";
import { Box, IconButton, Slide } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function ImageCarousel({ images = [] , height, width}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("left");
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection("right");
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: width || "100%",
        height: height || 300,
        overflow: "hidden",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      {images.map((img, i) => (
        <Slide
          key={i}
          direction={direction}
          in={index === i}
          mountOnEnter
          unmountOnExit
        >
          <Box
            component="img"
            src={img}
            sx={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </Slide>
      ))}

      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", top: "50%", left: 10, color: "white" }}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", top: "50%", right: 10, color: "white" }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}