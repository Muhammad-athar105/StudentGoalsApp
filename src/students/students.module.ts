import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './students.controller';
import { StudentsService } from './students.service';
import { Student } from 'src/entities/student.entity';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  controllers: [UsersController],
  providers: [StudentsService]
})
export class UsersModule { }
