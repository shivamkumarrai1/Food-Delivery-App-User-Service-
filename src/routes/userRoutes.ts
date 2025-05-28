import express from "express";
import { createUser } from "../controllers/userController";
import { placeOrder } from "../controllers/orderController";
import { submitRating } from "../controllers/ratingContoller";
import { getOnlineRestaurants } from "../controllers/restaurantController";
const router = express.Router();

router.post("/", createUser);
router.get("/restaurants/online", getOnlineRestaurants);
router.post("/orders", placeOrder);
router.post("/ratings", submitRating);

export default router;
