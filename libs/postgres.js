import Pg from 'pg';

async function getConnection() {
    const client = new Pg.Client({
        host: 'localhost',
        post: 5432,
        user: 'nico',
        password: 'admin123',
        database: 'my_store'
    });
    
    await client.connect();
    
    return client;
}

export { getConnection };