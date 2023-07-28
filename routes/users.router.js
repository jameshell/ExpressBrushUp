import express from 'express';
import { UserService } from "../services/user.service.js";
import { validatorHandler } from "../middlewares/validator.handler.js";
import { 
    updateUserSchema,
    createUserSchema,
    getUserSchema } from "../schemas/user.schema.js";

const usersRouter = express.Router();
const service = new UserService();

usersRouter.get('/', async (req, res, next) => {
    try {
        const users = await service.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

usersRouter.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.findOne(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);

usersRouter.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await service.create(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

usersRouter.patch('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const user = await service.update(id, body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);

usersRouter.delete('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(200).json({id});
        } catch (error) {
            next(error);
        }
    }
);

export { usersRouter };