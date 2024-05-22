import { TProduct } from "./product.interface";
import Product from "./product.model";

const createStudentIntoDB = async (productData: TProduct) => {
  if (await Product.exists({ name: productData.name })) {
    throw new Error("Product already exists");
  }
  const result = await Product.create(productData);
  return result;
};

export const ProductServices = {
  createStudentIntoDB,
};
