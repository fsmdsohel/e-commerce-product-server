import { TOrder } from "./order.interface";
import Order from "./order.model";

const createNewOrderIntoDB = async (orderData: TOrder) => {
  try {
    const newOrder = new Order(orderData);
    const result = await newOrder.save();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getAllOrdersFromDB = async () => {
  try {
    const result = await Order.find();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const OrderServices = {
  createNewOrderIntoDB,
  getAllOrdersFromDB,
};
