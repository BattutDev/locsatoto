import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Equipement } from './equipement.entity';

@Entity({
  name: 'appartement',
})
export class Appartement {
  @PrimaryColumn({
    nullable: false,
    type: 'varchar',
    unique: true,
    length: 40,
  })
  public code: string;
  @Column()
  public adresse: string;
  @Column()
  public nom: string;
  @Column({
    name: 'tarif_mois',
  })
  public tarifMois: string;

  @ManyToMany((type) => Equipement, (equipement) => equipement.nom)
  @JoinTable({
    name: 'appartement_equipements',
  })
  public equipements: Array<Equipement>;
}
