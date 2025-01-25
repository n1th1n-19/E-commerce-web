import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function SingleProduct() {
  const {id} = useParams()
  console.log(id,333)
  const [productInfo, setProductinfo] = useState(null);
  const [ImageIndex,setImageIndex] = useState(0)
  useEffect (()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>{
      console.log(res,342)
      setProductinfo(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Paper
              elevation={0}
              sx={{
                height: "104vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              {productInfo?.images.map((image, index) => (
                <Box
                  key={index}
                  onMouseOver={()=>setImageIndex(index)}
                  sx={{
                    cursor: "pointer",
                    margin: "10px 0",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <img
                    src={image}
                    style={{
                      width: "60%",
                      height: "60%",
                      objectFit: "contain",
                    }}
                    alt={`Product ${index}`}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                src={productInfo?.images[ImageIndex]}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt="Selected"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  {productInfo?.brand}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "24px", fontWeight: "bolder" }}
                >
                  {productInfo?.title}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Chip
                  size="small"
                  label={productInfo?.rating}
                  color={
                    productInfo?.rating > 4.5
                      ? "success"
                      : productInfo?.rating > 4
                      ? "warning"
                      : "error"
                  }
                  icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                  sx={{ borderRadius: "10px" }}
                />
                <Typography variant="body" color="text.secondary">
                  {productInfo?.reviews.length} reviews
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography
                  variant="h6"
                  mt={1}
                  fontWeight={"bolder"}
                  color="green"
                >
                  Extra {productInfo?.discountPercentage}% Off
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="h4" mt={1} color="text.secondary">
                  $ {productInfo?.price}
                </Typography>
                <Typography variant="h6" mt={1} color="text.secondary">
                  <strike>
                    $
                    {parseInt(
                      productInfo?.price + productInfo?.discountPercentage / 100
                    )}
                  </strike>
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="caption" mb={1} color="text.secondary">
                  {productInfo?.shippingInformation}
                </Typography>
              </Box>
              <Divider />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.description}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Warranty information</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.warrantyInformation}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Return policy</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.returnPolicy}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.availabilityStatus}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
