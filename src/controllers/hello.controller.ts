import {
  Example,
  Get,
  Query,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { BasicResponse } from '../utils/Responses';
import { IHelloController } from './interfaces/hello.interface';

@Route('/api/hello')
@Tags('Hello Controller')
export default class HelloController implements IHelloController {
  /**
   * Endpoint to say hello
   * @param {string} name Name to say hello
   * @returns Object with response status and message
   */
  @Get('/')
  @SuccessResponse(200, 'Say Hello')
  @Example({
    status: 200,
    message: 'Hello Martin',
  })
  @Response(400, 'Something went wrong', {
    code: 400,
    message: 'Something went wrong',
  })
  public async sayHello(@Query() name?: string): Promise<BasicResponse> {
    return {
      status: 200,
      message: `Hello ${name || 'stranger'}`,
    };
  }
}
