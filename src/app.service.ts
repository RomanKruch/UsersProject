import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { Model } from "mongoose"
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    return this.userModel.find();
  }

  async create(userBody: UserDto) {
    const newUser = new this.userModel(userBody);
    return newUser.save();
  }
}
