import { Injectable } from '@nestjs/common';
import { PlayerRegisteredEvent } from './register.player.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async handlePlayerRegistration(data:PlayerRegisteredEvent):Promise<string>{
   return data.email
  }
}
