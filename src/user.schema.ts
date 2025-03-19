import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class User extends Document {
    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    sex: string;

    @Prop({ type: [String] })
    phoneService: string[];

    @Prop()
    offers: string 
}

export const UserSchema = SchemaFactory.createForClass(User);