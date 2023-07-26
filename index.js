import express from 'express';
import { routerApi } from './routes/index.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js'
import boom from '@hapi/boom';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola, mi server en express!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const whitelist =
    [
        'http://localhost:8080',
        'https://localhost:8080',
        'http://localhost:3000',
        'https://localhost:3000'
    ];
const options = {
    origin: (origin, cb) => {
        if(whitelist.includes(origin)) {
            cb(null, true);
        } else {
            cb(boom.forbidden('The domain is not allowed.'));
        }
    }
}
app.use(cors(options));

app.listen(port, () => {
    console.log('Mi port '+port);
});