import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from "../Assets/Images/hero/image.png"

const Hero = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <Typography
        sx={{
          fontWeight: "900",
          fontSize: "3rem",
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
          fontWeight: "900",
          fontSize: "20px",
          color: "#FFD65A",
        }}
      >
        Discover the best deals and offers.
      </Typography>
      <Button
        sx={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1.2rem",
        }}
        color="success"
      >
        Shop Now
      </Button>
    </Box>
  );
}

export default Hero;
