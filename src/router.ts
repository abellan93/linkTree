import { Router } from 'express';
import { createAcount } from './handlers/index.js';
import { body } from 'express-validator';

const router = Router();

//Autenticación y registro de usuarios
router.post('/auth/register',
    body('handle').notEmpty(),
    createAcount);




export default router;