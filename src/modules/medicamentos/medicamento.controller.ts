import { Controller, Get, Post, Body } from '@nestjs/common';
import { MedicamentoService } from './medicamentos.service';
import { MedicamentoDto } from './medicamento.dto';

@Controller('medicamentos')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Post()
  create(@Body() { medicamento }: { medicamento: MedicamentoDto }) {
    return this.medicamentoService.create(medicamento);
  }

  @Get()
  getAll() {
    return this.medicamentoService.getAll();
  }
}
