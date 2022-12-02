import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDTO } from './team.dto';
import { Team, TeamDocument } from './team.schema';

@Injectable()
export class TeamsService {
    constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) { }

    async create(team: TeamDTO): Promise<Team> {
        const createdTeam = new this.teamModel(team);
        return createdTeam.save();
    }

    async findAll(): Promise<Team[]> {
        return this.teamModel.find().exec();
    }
}
