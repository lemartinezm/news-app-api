import { BasicResponse } from '../../utils/Responses';

export interface IHelloController {
  sayHello(name?: string): Promise<BasicResponse>;
}
