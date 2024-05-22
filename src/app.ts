import cors from "cors";
import express, { Application } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

// default route
app.get("/", async (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the E-commerce API" });
});

export default app;
