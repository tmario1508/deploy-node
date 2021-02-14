import express, {Request, Response, NextFunction, json} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({origin: true, credentials: true}));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'API NodeJS funcionando correctamente'
    });
});

app.listen(9000, () =>{
    console.log('Servidor Exprees corriendo en el puerto 9000')
});