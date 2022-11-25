import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { PlayerRegisteredEvent } from './register.player.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('palyer-registerd')
  handlePlayerRegistration(data:PlayerRegisteredEvent){
    this.appService.handlePlayerRegistration(data)
  }
}
