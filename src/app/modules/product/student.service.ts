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

export const ProductServices = {
  createStudentIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
};
