import cors from "cors";
import express, { Application } from "express";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/", async (req, res) => {
  res.json({ message: "Hello World!" });
});

export default app;
