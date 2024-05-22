import cors from "cors";
import express, { Application } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);
app.get("/", async (req, res) => {
  res.json({ message: "Hello World!" });
});

export default app;
