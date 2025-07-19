import autores from "../models/Autores.js";

export async function getTodosAutores() {
  const listaAutores = await autores.find({});
  return listaAutores;
}

export async function getAutorPorId(id) {
  return await autores.findById(id);
}

export async function insereAutor(autorNovo) {
  const autor = new autores(autorNovo);
  return await autor.save();
}

export async function modificaAutor(modificacoes, id) {
  const autorAtualizado = await autores.findByIdAndUpdate(
    id,
    { $set: modificacoes },
    { new: true, runValidators: true }
  );
  return autorAtualizado;
}

export async function deletarAutorPorId(id) {
  const autorDeletado = await autores.findByIdAndDelete(id);
  return autorDeletado;
}
