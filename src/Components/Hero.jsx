import { Box, Typography } from "@mui/material";
import React from "react";
import heroImage from "../Assets/Images/hero/image.png";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "900",
          fontSize:"3rem",
          textTransform: "uppercase",
          color: "#fff",
        }}
        gutterBottom
      >
        Everything You Love,<br /> All in One Place.
        <h4></h4>
      </Typography>
    </Box>
  );
}
