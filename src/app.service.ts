import { Injectable } from '@nestjs/common';
import { PlayerRegisteredEvent } from './register.player.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  handlePlayerRegistration(data:PlayerRegisteredEvent){
    console.log("PLAYERS MICROSERVICE ==> Player-Registration-Event", data)
  }
}
