import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Appartement } from './appartement.entity';
import { Inventaire } from './inventaire.entity';

@Entity({
  name: 'location',
})
export class Location {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public code: string;
  @Column({
    name: 'date_creation',
    type: 'datetime',
    default: () => 'NOW()',
  })
  public dateCreation: string;
  @ManyToOne((type) => Appartement, (appartement) => appartement.code)
  @Column({
    name: 'appartement_code',
  })
  public codeAppartement: string;
  @OneToOne((type) => Inventaire, (inventaire) => inventaire.id)
  @Column({
    name: 'inventaire_entree_id',
    nullable: true,
  })
  public idInventaireEntree: number;
  @OneToOne((type) => Inventaire, (inventaire) => inventaire.id)
  @Column({
    name: 'inventaire_sortie_id',
    nullable: true,
  })
  public idInventaireSortie: number;
}
