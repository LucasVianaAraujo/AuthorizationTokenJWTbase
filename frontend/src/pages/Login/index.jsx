import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api.js";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function VerificarLogin() {
        if (!email || !senha) {
            alert('Credenciais inválidas!');
            return;
        }

        try {
            const resp = await api.get(`/VerificarTokenLogin/${email}/${senha}`) // para o método de requisição get, não devemos passar as credenciais como parâmetro de corpo.

            const token = resp.data.token;
            const usuario = resp.data.usuario;

            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(usuario));

            console.log(`Token : ${token}`);

            navigate('/');
            // const token = resp.data.token;
            // const usuario = resp.data.id_usuario;

            // console.log("Seu token: " + token);
            // console.log("Usuario: " + usuario);
        }

        catch (err) {
            alert('Erro ao efetuar login!');
            console.log(err)
            return;
        }
    }

    return (
        <div className="index">
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Senha:</label>
            <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />

            <button onClick={VerificarLogin}>Enviar</button>
        </div>
    )
}
