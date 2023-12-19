import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicamento } from '../../entities/medicamentos.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MedicamentoDto, UpdateMedicamentoDto } from './medicamento.dto';

@Injectable()
export class MedicamentoService {
  constructor(
    @InjectRepository(Medicamento)
    private readonly medicamentoRepository: Repository<Medicamento>,
  ) {}

  async create(medicamento: MedicamentoDto): Promise<Medicamento> {
    const med = this.medicamentoRepository.create(medicamento);
    return this.medicamentoRepository.save(med);
  }

  async getAll(): Promise<Medicamento[]> {
    return this.medicamentoRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.medicamentoRepository.delete(id);
  }

  async update(
    id: number,
    updateMed: UpdateMedicamentoDto,
  ): Promise<UpdateResult> {
    return this.medicamentoRepository.update(id, updateMed);
  }
}
