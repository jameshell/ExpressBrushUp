import Joi from 'joi';

const id = 
    Joi.string()
        .uuid();

const name = 
    Joi.string()
        .min(3)
        .max(10);

const price = 
    Joi.number()
        .integer()
        .min(10);

const image = 
    Joi.string()
        .uri()

const createProductsSchema = Joi.object(
    {
        name: name.required(),
        price: price.required(),
        image: image
    }
);

const updateProductsSchema = Joi.object(
    {
        name: name,
        price: price,
        image: image
    }
);

const getProductsSchema = Joi.object(
    {
        id: id.required()
    }
);

export { createProductsSchema, updateProductsSchema, getProductsSchema };