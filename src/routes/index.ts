import { Request, Response, Router } from 'express';
import newsRouter from './news.routes';

const apiRouter = Router();

apiRouter.use('/news', newsRouter);

apiRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to News App API',
  });
});

export default apiRouter;
