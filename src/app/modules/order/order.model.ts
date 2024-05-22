import mongoose, { Model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new mongoose.Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Order: Model<TOrder> = mongoose.model<TOrder>("Order", orderSchema);

export default Order;
