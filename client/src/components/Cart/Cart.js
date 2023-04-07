import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import "./cart.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import CartBody from "./CartBody";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  let price = 0;
  let quant = 0;
  for (let i = 0; i < cartItems.length; i++) {
    price = price + (cartItems[i].priceNum)*cartItems[i].qty;
  }
  for (let i = 0; i < cartItems.length; i++) {
    quant = quant + cartItems[i].qty;
  }

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    let result = await fetch("https://xyz-rqcm.onrender.com/cart");
    result = await result.json();
    setCartItems(result);
  };
  

  return (
    <>
      <div className="cartHead">
        <h1>Shopping Cart</h1>
        <Link className="deleteCart">Deselect All items</Link>
      </div>
      <p style={{ color: "blue", marginLeft: "66vw", fontSize: "25px" }}>
        Price
      </p>
      <div className="allCart">
        <div className="cartbody">
          <CartBody cart={cartItems} setCart ={setCartItems} />
        </div>
        <div className="checkout">
          <div className="assure">
            {price >= 499 ? (
              <div className="disp">
                <CheckCircleOutlineIcon />
                <p>
                  Your order is eligible for FREE Delivery. Select this option
                  at checkout{" "}
                  <a
                    target="_blank"
                    className="detail"
                    href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1"
                  >
                    Details
                  </a>{" "}
                </p>
              </div>
            ) : (
              <div className="disp">
                <CancelIcon />
                <p>
                  Add ₹{499 - price} of eligible items to your order to qualify
                  for FREE Delivery
                </p>
              </div>
            )}
          </div>
          <div className="subtotal">Subtotal ({quant} items)</div>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "-15vw",
            }}
          >
            <CurrencyRupeeIcon style={{ width: "20px" }} /> {price}{" "}
          </h2>
          <div className="giftbox">
            <input type="checkbox" name="gift" id="gift1" />
            <label htmlFor="gift1">This order contains a gift</label>
          </div>
          <button className="proceedtobuy">Proceed to Buy</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
