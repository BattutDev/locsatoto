import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'etat',
})
export class Etat {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public libelle: string;
}
