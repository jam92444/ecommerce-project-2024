import StarBorderIcon from "@mui/icons-material/StarBorder"
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import OrderTraker from "./OrderTracker";
import AddressCard from "../AddressCard/AddressCard";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  // const navigate = useNavigate();
  return (
    <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard/>
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={3}
            />
          </Grid>
          <Grid item>
            {false && (
              <Button sx={{ color: "" }} color="error" variant="text">
                RETURN
              </Button>
            )}

            {true && (
              <Button sx={{ color: deepPurple[500] }} variant="text">
                cancel order
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>

      <Grid container className="space-y-5">
        {[1,1,1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">Men Printed Pure Cotton Straight Kurta</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: S</span>
                  </p>
                  <p>Seller: Majestic Man</p>
                  <p>₹1499 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                //   onClick={() => navigate(`/account/rate/${item.product.id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarBorderIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
