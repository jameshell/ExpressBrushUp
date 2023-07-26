import express from 'express';
import { routerApi } from './routes/index.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js'

const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola, mi server en express!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Mi port '+port);
});