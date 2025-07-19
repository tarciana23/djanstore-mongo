import { Router } from 'express';
import {
	getFavoritos,
	postFavorito,
	deleteFavorito,
} from '../controllers/favoritos.js';

const router = Router();

router.get('/', getFavoritos);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavorito);

export default router;
