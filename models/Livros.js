import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
	{
		_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
		nome: { type: String, required: true },
		editora: { type: String },
		preco: { type: Number },
		paginas: { type: Number },
		autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores' },
	},
	{ versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);
export default livro;
