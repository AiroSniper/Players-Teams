import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Player, PlayerSchema } from 'src/players/player.schema';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
    @Prop({ type: [PlayerSchema], default: [], required: true })
    players: Player[]

    @Prop({ default: false , required: true})
    name: string

    @Prop({ default: false })
    isWinner: boolean

    @Prop({ default: 0 })
    result: number

    @Prop({ default: 0 })
    enemyResult: number
}

export const TeamSchema = SchemaFactory.createForClass(Team);