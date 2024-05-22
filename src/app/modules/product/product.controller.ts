import { Request, Response } from "express";
import { ProductServices } from "./student.service";
import { TProductSchema } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const { error, value } = TProductSchema.validate(productData);

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error,
      });
    }
    const result = await ProductServices.createStudentIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (searchTerm) {
      const result = await ProductServices.searchProductByTermFromDB(
        searchTerm as string
      );

      return res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: result,
      });
    } else {
      const result = await ProductServices.getAllProductsFromDB();

      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: result,
      });
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getProductByIdFromDB(id);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { product: productData } = req.body;

    const result = await ProductServices.updateProductByIdFromDB(
      productId,
      productData
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductByIdFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
