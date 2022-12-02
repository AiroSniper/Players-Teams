import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { PlayerDTO } from './players/player.dto';
import { Player } from './players/player.schema';
import { PlayersService } from './players/players.service';
import { PlayerRegisteredEvent } from './register.player.event';
import { TeamDTO } from './teams/team.dto';
import { Team } from './teams/team.schema';
import { TeamsService } from './teams/teams.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly playersService: PlayersService,
    private readonly teamsService: TeamsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({cmd:'palyer-registerd'})
  async handlePlayerRegistration(data:PlayerRegisteredEvent):Promise<string>{
    return this.appService.handlePlayerRegistration(data)
  }

  @MessagePattern({cmd:'create-palyer'})
  async createPlayer(data:PlayerDTO):Promise<Player>{
    return this.playersService.create(data)
  }

  @MessagePattern({cmd:'all-players'})
  async findAllPlayers():Promise<Player[]>{
    return this.playersService.findAll()
  }

  
  @MessagePattern({cmd:'create-team'})
  async createTeam(data:TeamDTO):Promise<Team>{
    return this.teamsService.create(data)
  }

  @MessagePattern({cmd:'all-teams'})
  async findAllTeams():Promise<Team[]>{
    return this.teamsService.findAll()
  }
}
