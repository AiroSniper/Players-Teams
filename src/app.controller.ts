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

  @MessagePattern({cmd:'add-player'})
  async addPlayer(data:PlayerDTO):Promise<Player>{
    return this.playersService.create(data)
  }

  @MessagePattern({cmd:'all-players'})
  async allPlayers():Promise<Player[]>{
    return this.playersService.findAll()
  }

  
  @MessagePattern({cmd:'add-team'})
  async addTeam(data:TeamDTO):Promise<Team>{
    return this.teamsService.create(data)
  }

  @MessagePattern({cmd:'all-teams'})
  async allTeams():Promise<Team[]>{
    return this.teamsService.findAll()
  }
}
