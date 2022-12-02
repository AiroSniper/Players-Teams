import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Player, PlayerSchema } from './players/player.schema';
import { PlayersModule } from './players/players.module';
import { PlayersService } from './players/players.service';
import { Team, TeamSchema } from './teams/team.schema';
import { TeamsModule } from './teams/teams.module';
import { TeamsService } from './teams/teams.service';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  MongooseModule.forRoot(
    'mongodb://localhost:27017/players_teams'
  ), PlayersModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService, PlayersService, TeamsService],
})
export class AppModule {}
