import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from '../entities/student.entity';


@Controller('students')
export class UsersController {
  constructor(private readonly usersService: StudentsService) { }

  @Get('/')
  findAll(): Promise<Student[]> {
    return this.usersService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.usersService.findOne(Number(id));
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() productData): Promise<[number, Student[]]> {
    return this.usersService.update(Number(id), productData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): Promise<number> {
    return this.usersService.remove(Number(id));
  }
}
