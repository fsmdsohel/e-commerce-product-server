import { Document } from "mongoose";

export interface TVariant {
  type: string;
  value: string;
}

export interface TInventory {
  quantity: number;
  inStock: boolean;
}

export interface TProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}
