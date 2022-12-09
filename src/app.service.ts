import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PlayerRegisteredEvent } from './register.player.event';

@Injectable()
export class AppService {
  constructor( @Inject('ROOMS_MS') private readonly rooms_ms:ClientProxy,){}
}
