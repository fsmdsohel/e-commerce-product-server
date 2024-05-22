import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createNewOrderIntoDB(orderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (email) {
      const result = await OrderServices.getOrderByEmailFromDB(email as string);

      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully",
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrdersFromDB();

      res.status(200).json({
        success: true,
        message: "Orders fetched successfully",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const OrderControllers = {
  createNewOrder,
  getAllOrders,
};
