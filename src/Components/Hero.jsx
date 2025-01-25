import { Box, Typography,Button } from "@mui/material";
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
        alignItems: "left",
        flexDirection: "column",
        textAlign: "center",
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
          color: "#fff"
        }}
        gutterBottom
      >
        Everything You Love,<br /> All in One Place.
      </Typography>
      <Typography
        gutterBottom
        sx={{
          fontWeight: "900", fontSize: "20px",color:"#FFD65A",
        }}
      >
        Everything You Love,<br /> All in One Place.
      </Typography>
      <Button color="success">Shop Now</Button>
    </Box>
  );
}
