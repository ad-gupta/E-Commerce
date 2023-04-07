// require('dotenv').config()
const express = require("express");
const connectToDb = require("./config");
const dealProduct = require("./dealProduct");
const cors = require("cors");
const MobileProduct = require("./MobileProduct");
const Cart = require("./Cart");
const app = express();
connectToDb();

app.use(express.json());
app.use(cors());

app.post("/slideProducts", async (req, resp) => {
  const product = new dealProduct(req.body);
  const result = await product.save();
  resp.send(result);
});

app.get("/slideProducts", async (req, resp) => {
  const result = await dealProduct.find();
  if (result.length > 0) resp.send(result);
  else resp.send({ result: "No product found" });
});

app.post("/mobileData", async (req, resp) => {
  const product = new MobileProduct(req.body);
  const result = await product.save();
  resp.send(result);
});

app.get("/mobileData", async (req, resp) => {
  const result = await MobileProduct.find();
  if (result.length > 0) resp.send(result);
  else resp.send({ result: "No product found" });
});

app.get("/mobileData/:id", async (req, resp) => {
  const result = await MobileProduct.find({ _id: req.params.id });
  if (result.length > 0) resp.send(result);
  else resp.send({ result: "No product found" });
});

app.post("/cart", async (req, resp) => {
  let result = new Cart(req.body);
  result = await result.save();
  resp.send(result);
});

app.get("/cart", async (req, resp) => {
  let result = await Cart.find();
  if (result.length > 0) resp.send(result);
  else resp.send({ result: "No product found" });
});

app.get("/cart/:id", async (req, resp) => {
  let result = await Cart.findOne({ _id: req.params.id });
  if (result) resp.send(result);
  else resp.send({ result: "No product found" });
});

app.put("/cart/:id", async (req, resp) => {
  let reqw = req.body.find((ele) => {
    return ele._id == req.params.id;
  });
  let reqData = await Cart.updateOne(
    { _id: req.params.id },
    { $set: { qty: reqw.qty } }
  );
  resp.send({ msg: "Success" });
});

app.listen(8000, () => {
  console.log("server is running on 8000");
});
