import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student)
    private readonly studentModel: typeof Student,
  ) { }

  
  async findAll(): Promise<Student[]> {
    return this.studentModel.findAll();
  }

  async findOneByEmail(email: string): Promise<Student> {
    return await this.studentModel.findOne<Student>({ where: { email } });
}
  async findOne(id: number): Promise<Student> {
    return this.studentModel.findOne({ where: { id } });
  }

  async update(id: number, studentData): Promise<[number, Student[]]> {
    const [affectedCount, affectedRows] = await this.studentModel.update(studentData, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows as Student[]];
  }

  async remove(id: number): Promise<number> {
    return this.studentModel.destroy({ where: { id } });
  }

}
