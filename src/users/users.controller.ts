import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Post('/login')
  identify(@Body() body: any) {
    return body;
  }
}
