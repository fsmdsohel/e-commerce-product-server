import { TProduct } from "./product.interface";
import Product from "./product.model";

const createStudentIntoDB = async (productData: TProduct) => {
  if (await Product.exists({ name: productData.name })) {
    throw new Error("Product already exists");
  }
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductByIdFromDB = async (
  productId: string,
  productData: TProduct
) => {
  const result = await Product.findByIdAndUpdate(productId, productData, {
    new: true,
  });
  return result;
};

const deleteProductByIdFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createStudentIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductByIdFromDB,
};
