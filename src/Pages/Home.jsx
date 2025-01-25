import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Components/Hero";
import AboutContent from "../Components/AboutContent";
import Banner from "../Components/Banner";
import Shop from "./Shop";

export default function Home() {
  return (
    <Box>
      <Box>
        <Hero />
      </Box>
      <Box sx={{ p: 3 }}>
        <AboutContent />
      </Box>
      <Box>
        <Banner />
      </Box>
    </Box>
  );
}
