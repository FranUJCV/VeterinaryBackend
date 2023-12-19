// medicamento.dto.ts
export class MedicamentoDto {
  readonly id: number;
  readonly nombre: string;
  readonly tipo: string;
  readonly stock: number;
  readonly precioUnitario: number;
  readonly fechaVencimiento: Date;
}

export class UpdateMedicamentoDto {
  readonly nombre?: string;
  readonly tipo?: string;
  readonly stock?: number;
  readonly precioUnitario?: number;
  readonly fechaVencimiento?: Date;
}
