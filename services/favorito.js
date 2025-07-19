import favoritos from '../models/Favoritos.js';
import livros from '../models/Livros.js';

export async function getTodosFavoritos() {
	const listaFavoritos = await favoritos.find({});
	const listaLivros = await livros.find({
		_id: { $in: listaFavoritos.map((fav) => fav._id) },
	});
	return listaLivros;
}

export async function deletarFavoritoPorId(id) {
	await favoritos.deleteOne({ _id: id });
}

export async function insereFavorito(id) {
	const livro = await livros.findById(id);
	if (livro) {
		const novoFavorito = new favoritos({ _id: livro.id });
		await novoFavorito.save();
	}
}
