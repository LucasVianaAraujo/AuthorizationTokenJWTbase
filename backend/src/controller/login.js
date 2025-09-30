import * as functions from '../repository/login.js'
import { generateToken } from '../utils/jwt.js';
import { getAuthentication } from '../utils/jwt.js';

let autenticar = getAuthentication();

import { Router } from "express";

const endpoint = Router();

endpoint.post('/CadastrarUsuario', async (req, resp) => {
    const apelido = req.body.apelido;
    const email = req.body.email;
    const senha = req.body.senha;

    const registro = await functions.EnviarCadastro(apelido, email, senha);
    resp.send({ token: generateToken({ id: registro.id }) });
})

endpoint.get('/VerificarTokenLogin/:email/:senha', async (req, resp) => {
    const email = req.params.email;
    const senha = req.params.senha;

    const registro = await functions.VerificarToken(email, senha);
    resp.send({
        token: generateToken({ id: registro.id }),
        usuario: registro // para checar qual o retorno id para o email e senha, bom usar pra garantir se é o id correto
    });
})

endpoint.get('/LerMeuApelido', autenticar, async (req, resp) => {
    const id = req.user.id;
    const registro = await functions.LerApelido(id);
    resp.send({
        apelido: ({registro: registro.apelido})
    });
})

export default endpoint;