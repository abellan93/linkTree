import { Router } from 'express';
import User from './models/User.js';

const router = Router();

//Autenticación y registro de usuarios
router.post('/auth/register',async (req, res) => {
   const user = new User(req.body);
   await user.save();
});




export default router;