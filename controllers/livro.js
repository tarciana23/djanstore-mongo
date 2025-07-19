import {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	modificaLivro,
	deletarLivroPorId,
	getLivrosDaEditora
} from '../services/livro.js';

export async function getLivros(req, res) {
	try {
		const livros = await getTodosLivros();
		res.send(livros);
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}

export async function getLivro(req, res) {
	try {
		const id = req.params.id;
		if (id) {
			const livro = await getLivroPorId(id);
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

export async function getEditora(req, res) {
	try {
		const editora = req.params.editora;
		if (editora) {
			const livrosNessEditora = await getLivrosDaEditora(editora);
			res.send(livrosNessEditora);
		} else {
			res.status(422);
			res.send('Id inválido');
		}
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}

export async function postLivro(req, res) {
	try {
		const livroNovo = req.body;
		if (req.body.nome) {
			await insereLivro(livroNovo);
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

export async function patchLivro(req, res) {
	try {
		const id = req.params.id;

		if (id) {
			const body = req.body;
			const livroAtualizado = await modificaLivro(body, id);
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

export function deleteLivro(req, res) {
	try {
		const id = req.params.id;
		if (id) {
			deletarLivroPorId(id);
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
