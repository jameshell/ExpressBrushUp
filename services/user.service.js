import { sequelizeClient } from './../libs/sequelize.js'
import boom from '@hapi/boom';

class UserService {

    constructor() {
    }

    async create(data) {
        return await sequelizeClient.models.User.create();
    }

    async find() {
        return await sequelizeClient.models.User.findAll();
    }

    async findOne(id) {
        const user = await sequelizeClient.models.User.findByPk(id);
        if(!user) {
            throw boom.notFound("User not found.");
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        return await user.update(changes);
    }

    async delete(id) {
        const user = await sequelizeClient.models.User.findByPk(id);
        await user.destroy();
        return { id };
    }

}

export { UserService };