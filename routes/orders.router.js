import express from 'express';

const ordersRouter = express.Router();

ordersRouter().get('/', (req, res) => {
    res.json([]);
});

export { ordersRouter }