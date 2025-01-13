import { Router } from 'express';
import { createAcount } from './handlers/index.js';

const router = Router();

//Autenticación y registro de usuarios
router.post('/auth/register', createAcount);




export default router;