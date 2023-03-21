import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Etat } from './etat.entity';
import { Equipement } from './equipement.entity';

@Entity({
  name: 'evaluation',
})
export class Evaluation {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public commentaire: string;
  @OneToOne((type) => Equipement, (equipement) => equipement.nom)
  @Column({
    name: 'equipement_nom',
  })
  public nomEquipement: string;
  @OneToOne((type) => Etat, (etat) => etat.libelle)
  @Column({
    name: 'etat_libelle',
  })
  public etatLibelle: string;

  @Column({
    name: 'inventaire_id',
  })
  public idInventaire: string;
}
