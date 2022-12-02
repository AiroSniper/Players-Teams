import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PlayerDTO } from './player.dto';
import { Player, PlayerDocument } from './player.schema';

@Injectable()
export class PlayersService {
    constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) { }

    async create(player: PlayerDTO): Promise<Player> {
        const createdPlayer = new this.playerModel(player);
        return createdPlayer.save();
    }

    async findAll(): Promise<Player[]> {
        return this.playerModel.find().exec();
    }
}
