// medicamento.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column()
  stock: number;

  @Column()
  precioUnitario: number;

  @Column({ type: 'date' })
  fechaVencimiento: Date;
}
