import livros from "../models/Livros.js";

export async function getTodosLivros() {
  const listaLivros = await livros.find({});
  return listaLivros;
}

export async function getLivroPorId(id) {
  return await livros.findById(id);
}

export async function getLivrosDaEditora(editora) {
  return await livros.find({editora});
}

export async function insereLivro(livroNovo) {
  const livro = new livros(livroNovo);
  const livroSalvo = await livro.save();
  return await livros.findById(livroSalvo._id).populate('autor');
}


export async function modificaLivro(modificacoes, id) {
  const livroAtualizado = await livros.findByIdAndUpdate(
    id,
    { $set: modificacoes },
    { new: true, runValidators: true }
  );
  return livroAtualizado;
}

export async function deletarLivroPorId(id) {
  const livroDeletado = await livros.findByIdAndDelete(id);
  return livroDeletado;
}
