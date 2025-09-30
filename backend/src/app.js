import Routes from './routes.js';

import express from 'express';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

Routes(api);

api.listen(5001, ()=> console.log('Conectado ao MySQL!'));