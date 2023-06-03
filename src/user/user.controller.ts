import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ name: 'Mcgill Evaristo Dias' });
  }
  @Post()
  async createUsers(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined
    };
  }
}
