import Joi from "joi";

const TVariantSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

const TInventorySchema = Joi.object({
  quantity: Joi.number().integer().required(),
  inStock: Joi.boolean().required(),
});

const TProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(TVariantSchema).required(),
  inventory: TInventorySchema.required(),
});

export { TProductSchema, TInventorySchema, TVariantSchema };
