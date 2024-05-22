import * as Joi from "joi";

// Define Joi validation schema for TOrder interface
const TOrderSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  productId: Joi.string().required().messages({
    "any.required": "Product ID is required",
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required",
  }),
  quantity: Joi.number().integer().required().messages({
    "any.required": "Quantity is required",
    "number.integer": "Quantity must be an integer",
  }),
});

export { TOrderSchema };
