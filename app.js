import express from 'express';
import rotaLivro from './routes/livro.js';
import rotaFavorito from './routes/favoritos.js';
import rotaAutor from './routes/autores.js'
import cors from 'cors';
import pool from './config/dbConnect.js';

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
const conexao = await pool();

conexao.on('error', (error) => {
	console.error('Erro de conexão com o banco de dados:', error);
});
conexao.once('open', () => {
	console.log('Conexão com o banco de dados estabelecida com sucesso');
});

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);
app.use('/autores', rotaAutor);

const port = 8000;

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
});
