import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'success'
    })
})

export default app;