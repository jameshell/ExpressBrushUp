import boom from '@hapi/boom';
import { pool } from "../libs/postgres.pool.js";

class UserService {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err));
    }

    async create(data) {
        return data;
    }

    async find() {
        const query = 'SELECT * FROM tasks';
        const res = await this.pool.query(query);
        return res.rows;
    }

    async findOne(id) {
        return {id};
    }

    async update(id, changes) {
        return {
            id,
            changes,
        };
    }

    async delete(id) {
        return {id};
    }

}

export { UserService };