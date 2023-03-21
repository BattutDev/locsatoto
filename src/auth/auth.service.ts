import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.login(login, password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user) {
      delete user.mdp;
      return user;
    }
    return null;
  }
}
