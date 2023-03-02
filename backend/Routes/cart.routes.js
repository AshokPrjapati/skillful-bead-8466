const express = require("express");
const CartRouter = express.Router();
const cart_controller = require("../Controllers/user.controller")


CartRouter.post("/add", cart_controller.AddToCart);

CartRouter.post("/remove", cart_controller.RemoveFromCart);

CartRouter.get("/getcart", cart_controller.GetCart);

CartRouter.post("/update/:id", cart_controller.UpdateCart);

CartRouter.get("/carttotal", cart_controller.CartTotal);

module.exports = { CartRouter };