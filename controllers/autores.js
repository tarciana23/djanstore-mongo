import { 
    getTodosAutores, 
    getAutorPorId, 
    insereAutor, 
    modificaAutor, 
    deletarAutorPorId } from '../services/autor.js';
export async function buscarAutores(req, res) {
    try {
        const livros = await getTodosAutores();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export async function bsucarAutorPorId(req, res) {
    try {
        const id = req.params.id;
        if (id) {
            const livro = await getAutorPorId(id);
            res.send(livro);
        } else {
            res.status(422);
            res.send('Id inválido');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export async function postAutor(req, res) {
    try {
        const livroNovo = req.body;
        if (req.body.nome) {
            await insereAutor(livroNovo);
            res.status(201);
            res.send('Livro inserido com sucesso');
        } else {
            res.status(422);
            res.send('O campo nome é obrigatório');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export async function patchAutor(req, res) {
    try {
        const id = req.params.id;

        if (id) {
            const body = req.body;
            const livroAtualizado = await modificaAutor(body, id);
            res.send(livroAtualizado);
        } else {
            res.status(422);
            res.send('Id inválido');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export function deleteLivroPorId(req, res) {
    try {
        const id = req.params.id;
        if (id) {
            deletarAutorPorId(id);
            res.send('livro deletado com sucesso');
        } else {
            res.status(422);
            res.send('ID inválido');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
