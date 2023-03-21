import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Evaluation } from './evaluation.entity';

type InventaireType = 'InventaireEntree' | 'InventaireSortie';

@Entity({
  name: 'inventaire',
})
export class Inventaire {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public dtype: InventaireType;
  @Column()
  public commentaire: string;
  @Column({
    name: 'date_creation',
  })
  public dateCreation: string;
  @OneToMany((type) => Evaluation, (evalutation) => evalutation.id)
  @JoinColumn({
    name: 'inventaire_id',
  })
  public evalutations: Array<Evaluation>;
}
