import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Agent } from '../entities/agent.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
}
