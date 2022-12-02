import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {

    @Prop({ required: true })
    firstName: string

    @Prop({ required: true })
    lastName: string

    @Prop({ required: true })
    cin: string

    @Prop({ required: true })
    phone: string

    @Prop()
    address: string

    @Prop()
    country: string

    @Prop()
    city: string

    @Prop()
    region: string

    @Prop()
    birthDate: Date

    @Prop()
    score: number
}

export const PlayerSchema = SchemaFactory.createForClass(Player);