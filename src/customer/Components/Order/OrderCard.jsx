// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
// import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            //   onClick={() => navigate(`/account/order/${order?.id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">Mejestic Man</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Color: Blue</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹499</p>
        </Grid>
        <Grid item xs={4}>
          {" "}
          {true && (
            <p className="space-y-2 font-semibold">
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Delivered On Mar 03</span>
            </p>
          )}
          {false && (
            <p className="space-y-2 font-semibold">
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
          <p className="text-xs">Your Item Has Been Delivered</p>
          <div
            // onClick={() => navigate(`/account/rate/{id}`)}
            className="flex items-center text-blue-600 cursor-pointer"
          >
            <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
            <span>Rate & Review Product</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
