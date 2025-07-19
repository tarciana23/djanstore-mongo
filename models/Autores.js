import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
        nome: { type: String, required: true },
        nacionalidade: { type: String },
    },
    { versionKey: false }
);

const autor = mongoose.model('autores', autorSchema);
export default autor;
    