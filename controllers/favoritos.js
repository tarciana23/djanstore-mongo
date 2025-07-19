import {
	getTodosFavoritos,
	insereFavorito,
	deletarFavoritoPorId,
} from '../services/favorito.js';

export async function getFavoritos(req, res) {
	try {
		const livros = await getTodosFavoritos();
		res.send(livros);
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}

export async function postFavorito(req, res) {
	try {
		const id = req.params.id;
		await insereFavorito(id);
		res.status(201);
		res.send('Livro inserido com sucesso');
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}

export async function deleteFavorito(req, res) {
	try {
		const id = req.params.id;

		if (id) {
			await deletarFavoritoPorId(id);
			res.send('Favorito deletado com sucesso');
		} else {
			res.status(422);
			res.send('ID inválido');
		}
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}
