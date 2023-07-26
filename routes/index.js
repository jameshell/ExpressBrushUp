import { productsRouter}  from './products.router.js';
import { usersRouter } from './users.router.js';
import { categoriesRouter } from './categories.router.js';
import { ordersRouter } from "./orders.router.js";
import express from 'express';
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    router.use('/orders', ordersRouter);
}

export { routerApi };