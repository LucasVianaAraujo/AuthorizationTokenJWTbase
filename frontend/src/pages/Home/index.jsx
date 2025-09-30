import './index.scss'

import api from '../../api.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function index() {
    const navigate = useNavigate();
    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function EnviarCadastro() {
        if (!apelido || !email || !senha) {
            alert('Erro ao cadastrar!');
            return
        }

        try {
            const resp = api.post('/CadastrarUsuario', {
                "apelido": apelido,
                "email": email,
                "senha": senha
            }
            )

            navigate('/Apelido');
            alert('Usuário Cadastrado!');
        }

        catch (err) {
            alert('Erro ao Cadastrar!');
            console.log(err);
            return
        }
    }

    return (
        <div className='index'>
            <label>Apelido:</label>
            <input value={apelido} onChange={(e) => setApelido(e.target.value)} />

            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Senha:</label>
            <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />

            <button onClick={EnviarCadastro}>Enviar</button>
        </div>
    )
}
