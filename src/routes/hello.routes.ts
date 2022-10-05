import { Request, Response, Router } from 'express';
import HelloController from '../controllers/hello.controller';

const helloRouter = Router();

helloRouter.route('/').get(async (req: Request, res: Response) => {
  const name = req.query?.name?.toString();

  const controller = new HelloController();
  const helloMessage = await controller.sayHello(name);

  return res.status(helloMessage.status).send(helloMessage);
});

export default helloRouter;
