import { connection } from "./connection.js";

export async function EnviarCadastro(apelido, email, senha) {
    const comando = `
    INSERT INTO TabelaRegistro (apelido, email, senha)
    VALUES
    (?,?,?)
    `

    const [info] = await connection.query(comando, [
        apelido, email, senha
    ])

    return { id: info.insertId }; // essencial fazer dessa forma, aqui eu estou especificando o que quero receber.
}

export async function VerificarToken(email, senha) {
    const comando = `
    SELECT id_usuario
    FROM TabelaRegistro
    WHERE email = ?
    AND senha = ?
    `

    const [info] = await connection.query(comando, [
        email, senha
    ])

    return { id: info[0].id_usuario };

    // caso necessite buscar alguma credencial específica, ao invés de retornar o valor info, infome aqui em forma de objetivo qual informação deseja enviar para o endpoint de origem, nesse caso foi o id_usuário que provém do email e senha inserido. Originalmente, a fórmula base seria {id: ...}, mas não queremos todos os dados da tabela, somente um deles, o id_usuario que é requisitado pelo select.
}

export async function LerApelido(id) {
    const comando = `
    SELECT apelido
    FROM TabelaRegistro
    WHERE id_usuario = ?
    `

    const [info] = await connection.query(comando, [id])

    return {apelido: info[0].apelido}; // esse array [0] basicamente desconsidera informações não necessárias em determinadas ocasiões (encontrar o apelido).
}