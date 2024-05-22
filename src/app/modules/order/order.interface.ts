import { Document } from "mongoose";

export interface TOrder extends Document {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}
