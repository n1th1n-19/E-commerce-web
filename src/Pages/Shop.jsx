import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import NoData from "../Components/NoData";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   let filtered = [...products];

  //   // Filter by category
  //   if (selectedCategory !== "All") {
  //     filtered = filtered.filter(
  //       (product) => product.category === selectedCategory
  //     );
  //   }
  //   // Filter by search term
  //   if (searchTerm) {
  //     filtered = filtered.filter((product) =>
  //       product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }
  //   // Set the filtered products
  //   setFilteredProducts(filtered);
  // }, [selectedCategory, searchTerm, products]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ p: 2 }} size={{ xs: 12, sm: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Chip
                color={selectedCategory === "All" ? "success" : "default"}
                label={"All"}
                component={Paper}
              />
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 9 }} sx={{ p: 2 }}>
          <Box>
            <TextField
              fullWidth
              type="search"
              label="Search product here"
              placeholder="search product by title"
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid2 container spacing={2}>

                
                <Grid2 size={{ xs: 12, sm: 4 }}>
                  <ProductCard />
                </Grid2>

                <Box sx={{ flexGrow: 1, p: 3 }}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 12 }}>
                      <NoData />
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
