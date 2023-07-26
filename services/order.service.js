﻿import boom from '@hapi/boom';

class OrderService {

    constructor() {
    }

    async create(data) {
        return data;
    }

    async find() {
        return [];
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

export { OrderService };