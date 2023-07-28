import Pg from 'pg';
const pool= new Pg.Pool({
    host: 'localhost',
    post: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'my_store'
});

export { pool };