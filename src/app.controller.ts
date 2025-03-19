import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user.dto';
import { UserTemplate } from './templates/user.temlate';
import { validateUserBody } from './validateUserBody';
import { ErrorsTemplate } from './templates/errors.template';
import { UsersListTemplate } from './templates/usersList.template';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers() {
    const users = await this.appService.getUsers();
    return UsersListTemplate(users);
  }

  @Post()
  async create(@Body() body: UserDto) {
    const errors = validateUserBody(body);

    if (errors.length) {
        return ErrorsTemplate(errors);
    }

    const newUser = await this.appService.create(body)

    return UserTemplate(newUser)
  }
}
