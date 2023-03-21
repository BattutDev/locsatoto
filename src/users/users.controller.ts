import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  identify(@Body() body: any, @Request() req) {
    return body;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/logout')
  logout(@Request() req, @Res() res): any {
    req.session.destroy();
    return res.redirect('/login');
  }
}
