import React, { useEffect, useState, } from "react";
import { useNavigate, useParams } from "react-router";
import Carousel from "react-material-ui-carousel";
import "./mobileDetails.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Divider } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RestoreIcon from "@mui/icons-material/Restore";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";


const MobileDetails = () => {
  let x =0;
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setbrand] = useState("");
  const [NSP, setNSP] = useState("");
  const [MemoryStorage, setMemoryStorage] = useState("");
  const [ScreenSize, setScreenSize] = useState("");
  const [imag, setimag] = useState([]);
  const [priceNum, setPriceNum] = useState(x);

  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let result = await fetch(`http://localhost:8000/mobileData/${id}`);
    result = await result.json();

    setID(result[0]._id);
    setName(result[0].name);
    setPrice(result[0].price);
    setbrand(result[0].Brand);
    setNSP(result[0].NSP);
    setMemoryStorage(result[0].MemoryStorage);
    setScreenSize(result[0].ScreenSize);
    setimag(result[0].imag);
    setPriceNum(result[0].priceNum);
    console.log(result);
  };

  const item = {ID, name, price, brand, NSP, MemoryStorage, ScreenSize, imag, qty:1, priceNum};

  const handleAddToCart = async () => {
    let result = fetch("http://localhost:8000/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json;
  };

  return (
    <div className="mobilebody">
      <div className="temp_images">
        <Carousel
          className="carousel-mobile"
          autoPlay={true}
          animation="slide"
          // indicators= {false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          navButtonsProps={{
            style: {
              backgroundImage:
                "linear-gradient(rgb(255, 255, 255), rgb(178, 117, 4))",
              height: "40px",
              color: "black",
              borderRadius: "20px",
            },
          }}
        >
          {imag.map((imag, i) => (
            <img
              key={i}
              src={imag}
              className="image-mobile"
              alt="https://unsplash.com/photos/hED6zg6YaEU"
            />
          ))}
        </Carousel>
      </div>

      <div className="detailBox">
        <h2 className="nam">{name} </h2>
        <p>Visit the {brand} store</p>
        <div className="rating">
          <StarRateIcon style={{ width: "18px" }} />
          <StarRateIcon style={{ width: "18px" }} />
          <StarRateIcon style={{ width: "18px" }} />
          <StarRateIcon style={{ width: "18px" }} />
          <StarOutlineIcon style={{ width: "18px" }} />
        </div>
        <h2 style={{ display: "flex", alignItems: "center" }}>
          <CurrencyRupeeIcon style={{ width: "20px" }} /> {price}{" "}
        </h2>
        <p style={{ marginBottom: "20px" }}>inclusive of all taxes</p>
        <Divider />
        <div className="detailIcons">
          <div className="det1">
            <LocalShippingIcon
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.388)",
                borderRadius: "50%",
                color: "yellow",
                width: "30px",
                height: "30px",
                padding: "3px",
              }}
            />
            <p>free delivery</p>
          </div>
          <div className="det1">
            <RestoreIcon
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.188)",
                borderRadius: "50%",
                color: "rgb(250, 111, 5)",
                width: "30px",
                height: "30px",
                padding: "3px",
              }}
            />
            <p>7 days replacement</p>
          </div>
          <div className="det1">
            <LocalShippingIcon
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.388)",
                borderRadius: "50%",
                color: "yellow",
                width: "30px",
                height: "30px",
                padding: "3px",
              }}
            />
            <p>amazon delivered</p>
          </div>
          <div className="det1">
            <VerifiedUserIcon
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.188)",
                borderRadius: "50%",
                color: "rgb(250, 111, 5)",
                width: "30px",
                height: "30px",
                padding: "3px",
              }}
            />
            <p>1 year warranty</p>
          </div>
        </div>
        <Divider />
        <div className="det2">
          <p>SIZE : {MemoryStorage} </p>
          <p>BRAND : {brand} </p>
          <p>SCREEN SIZE : {ScreenSize} </p>
          <p>Wireless Network Technology : Wi-Fi </p>
          <p>Network Service Provider : {NSP}</p>
        </div>
      </div>

      <div className="amtDetails">
        <p>Without Exchange</p>
        <h2 style={{ textAlign: "center" }}>
          <CurrencyRupeeIcon style={{ width: "15px" }} /> {price}{" "}
        </h2>
        <p style={{ color: "blue" }}>FREE delivery</p>
        <p style={{ color: "green" }}>IN stock</p>
        <div className="btns">
          <button className="cartbtn" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <button className="cartbtn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;
