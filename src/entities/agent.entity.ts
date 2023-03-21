import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'agent',
})
export class Agent {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public login: string;
  @Column()
  public mdp: string;
  @Column()
  public nom: string;
  @Column()
  public prenom: string;
}
