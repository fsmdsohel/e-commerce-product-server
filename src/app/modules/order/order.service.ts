import Product from "../product/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createNewOrderIntoDB = async (orderData: TOrder) => {
  try {
    const product = await Product.findById(orderData.productId);

    if (!product) {
      throw new Error("Order not found");
    }

    if (orderData.quantity > product.inventory.quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }

    const newQuantity = product.inventory.quantity - orderData.quantity;

    await Product.updateOne(
      { _id: orderData.productId },
      {
        $set: {
          "inventory.quantity": newQuantity,
          "inventory.inStock": newQuantity <= 0 ? false : true,
        },
      }
    );
    const newOrder = new Order(orderData);
    const result = await newOrder.save();

    return result;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

const getAllOrdersFromDB = async () => {
  try {
    const result = await Order.find();
    return result;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

const getOrderByEmailFromDB = async (email: string) => {
  try {
    const result = await Order.find({ email: email });
    return result;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const OrderServices = {
  createNewOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
