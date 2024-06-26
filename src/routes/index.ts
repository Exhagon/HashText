import { Router } from 'express';
import { crearHash, verifyHash } from '../hash';
import { HashRequest, QueryParams } from '../interfaces/RequestInterface';

const router = Router();

router.get('/', (req:any, res:any) => {
    res.send('Hola Mundo desde TypeScript!');
});

router.post('/hash', (req:HashRequest, res:any)=> {
    const QueryParams:QueryParams = req?.query;
    typeof QueryParams.texto === 'string'?
        res.send(`Texto hasheado es ${crearHash(QueryParams.texto)}`) 
    : 
        res.status(400).send('El parámetro texto es requerido y debe ser un string.');
});
router.post('/verifyhash', (req:HashRequest, res:any)=> {
    const QueryParams:QueryParams = req?.query;
    typeof QueryParams.texto === 'string' && typeof QueryParams.hash === 'string'?
        res.send(`Texto hasheado es ${verifyHash(QueryParams.texto,QueryParams.hash)}`) 
        :
        res.status(400).send('El parámetro texto es requerido y debe ser un string.');
});

export default router;