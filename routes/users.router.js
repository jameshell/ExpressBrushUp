import express from 'express';
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send('No hay parametros!');
    }
});

export { usersRouter };