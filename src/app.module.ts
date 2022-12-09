import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
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
    ClientsModule.register([
      {
        name:'ROOMS_MS',
        transport:Transport.TCP,
        options: {
          host: 'localhost',
          port: 6371,
        }
      },
    ]),
  MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  MongooseModule.forRoot(
    'mongodb+srv://root:root@playersteams.86d1ajg.mongodb.net/?retryWrites=true&w=majority'
  ), PlayersModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService, PlayersService, TeamsService],
})
export class AppModule {}
