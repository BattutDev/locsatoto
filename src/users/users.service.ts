import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Agent } from '../entities/agent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'node:crypto';
const md5 = (data) => crypto.createHash('md5').update(data).digest('hex');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {}

  public async getUser(login: string): Promise<Agent> {
    return this.agentRepository.findOneBy({
      login,
    });
  }

  public async login(login, password): Promise<Agent> {
    return this.agentRepository
      .find({
        where: {
          login,
          mdp: md5(password),
        },
      })
      .then((d) => d[0]);
  }
}
