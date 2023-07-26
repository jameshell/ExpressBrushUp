import {faker} from "@faker-js/faker";
import express from 'express';
import { ProductService } from '../services/product.service.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import {
    getProductsSchema,
    updateProductsSchema,
    createProductsSchema
} from '../schemas/product.schema.js';

const productsRouter = express.Router();
const service = new ProductService();

productsRouter.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
});

productsRouter.get('/filter', (res, req) => {
    res.send('Yo soy un filtro');
});

productsRouter.get('/:id',
    validatorHandler(getProductsSchema, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await service.findOne(id);
        res.json(product);
    } catch (err) {
        next(err);
    }
});

productsRouter.post('/',
    validatorHandler(createProductsSchema, 'body'),
    async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

productsRouter.patch('/:id',
    validatorHandler(getProductsSchema, 'params'),
    validatorHandler(updateProductsSchema, 'body'),
    async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

productsRouter.delete('/:id',
    validatorHandler(getProductsSchema, 'params'),
    async (req, res) => {
    const {id} = req.params;
    const product = await service.delete(id);
    res.status(201).json(product);
});

export {productsRouter};