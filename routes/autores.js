import { Router } from 'express';
import {
    buscarAutores,
    bsucarAutorPorId,
    postAutor,
    patchAutor,
    deleteLivroPorId
} from '../controllers/autores.js';

const router = Router();
router.get('/', buscarAutores);
router.get('/:id', bsucarAutorPorId);

router.post('/', postAutor);

router.patch('/:id', patchAutor);

router.delete('/:id', deleteLivroPorId);

export default router;
