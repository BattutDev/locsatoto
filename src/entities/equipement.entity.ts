import { Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'equipement',
})
export class Equipement {
  @PrimaryColumn({
    nullable: false,
    type: 'varchar',
    unique: true,
    length: 40,
  })
  public nom: string;
}
