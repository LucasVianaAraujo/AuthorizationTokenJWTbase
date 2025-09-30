import { useState } from "react"
import api from "../../api.js"

export default function Apelido() {
    const [lista, setLista] = useState([]);

    async function CarregarLista() {
        try {
            const token = localStorage.getItem("token");
            console.log(token);

            const resp = await api.get('/LerMeuApelido',
                {
                    headers: { 'x-access-token': token }
                }
            );

            console.log(resp.data.apelido.registro);

            setLista([resp.data]);
        }

        catch (err) {
            alert('Erro ao carregar apelido')
        }
    }

    return (
        <div className="index">
            <button onClick={CarregarLista}>Mostrar Apelido</button>

            {
                lista.map((listinha, pos) => {
                    return <div key={pos}>
                        <h1>{listinha.apelido.registro}</h1>
                    </div>
                })
            }
            
        </div >
    )
}