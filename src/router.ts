import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo en TypeScript !!!');
});

router.get('/nosotros', (req, res) => {
    res.send('Hola nosotros !!!');
});

router.get('/blog', (req, res) => {
    res.send('Hola blog!!!');
});

export default router;