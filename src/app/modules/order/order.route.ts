import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createNewOrder);
router.get("/", OrderControllers.getAllOrders);

export const OrderRoutes = router;
