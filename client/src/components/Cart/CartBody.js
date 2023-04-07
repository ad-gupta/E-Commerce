import React, { useEffect, useState } from 'react'
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Divider } from "@mui/material";



const CartBody = ({cart, setCart}) => {

    async function handleIncrease(id){
        cart.map((item, i) => {
          if(item._id === id) {
            item.qty++;
          }
        })
    
        updateCart(id)
      }
    
    
      async function handleDecrease(id){
        cart.map((item, i) => {
          if(item._id === id) {
            item.qty--;
          }
        })
    
        updateCart(id)
      }
    
      const updateCart = async (x) => {
        let result = await fetch(`http://localhost:8000/cart/${x}`, {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        result = await result.json();
        setCart(cart)
        console.log(cart)
      }
  return (
    <div>
      {
        cart.map((item, i) => (
            <div className="items">
              <div className="pic">
                <img src={item.imag} alt="image" className="mainpic" />
              </div>
              <div className="body">
                <div className="nameprice">
                  <div className="itemName">{item.name} </div>
                  <h2
                    style={{
                      display: "flex",
                      marginRight: "-13vw",
                      paddingLeft: "15vw",
                    }}
                  >
                    <CurrencyRupeeIcon style={{ width: "20px" }} /> {item.price}{" "}
                  </h2>
                </div>
                <p style={{ color: "blue" }}>In stock</p>
                <p style={{ color: "green" }}>Eligible for FREE shipping</p>
                <div className="fulfil">
                  <DoneAllIcon />
                  <p>amazon fulfilled</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ color: "blue" }}>Size: </p>{" "}
                  <p>{item.MemoryStorage} </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ color: "blue" }}>Display: </p>{" "}
                  <p>{item.ScreenSize} </p>
                </div>
                {/* increment-decrement btn */}
                <div className="xyz">
                  <div className="mainQty">
                    <div className="incdec">
                      <button className="inc" onClick={() => handleIncrease(item._id)}>+</button>
                      <p style={{width: "20px" , textAlign: "center"}}>{item.qty} </p>
                      <button className="inc" onClick={() => handleDecrease(item._id)}>-</button>
                    </div>
                  </div>
                  <button className="del" onClick={()=> updateCart(item._id)}> Update </button>
                  <button className="del"> Delete </button>
                  <div className="save">Save for later</div>
                </div>
              </div>
              <Divider />
            </div>
          ))
      }
    </div>
  )
}

export default CartBody
