import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicamento } from './entities/medicamentos.entity';
import { MedicamentoController } from './modules/medicamentos/medicamento.controller';
import { MedicamentoService } from './modules/medicamentos/medicamentos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'veterinary_db',
      entities: [Medicamento],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Medicamento]),
  ],
  controllers: [AppController, MedicamentoController],
  providers: [AppService, MedicamentoService],
})
export class AppModule {}
