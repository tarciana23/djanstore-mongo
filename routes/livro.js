import { Router } from 'express';
import {
	getLivros,
	getLivro,
	postLivro,
	patchLivro,
	deleteLivro,
	getEditora
} from '../controllers/livro.js';

const router = Router();
router.get('/', getLivros);
router.get('/:id', getLivro);
router.get('/editora/:editora', getEditora);
router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

export default router;
