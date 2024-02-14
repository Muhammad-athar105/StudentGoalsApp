import { Table, Column, Model, BeforeCreate, BeforeUpdate, DataType } from "sequelize-typescript";
import * as bcrypt from 'bcrypt';

@Table
export class Student extends Model<Student>{

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  goals: string;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(instance: Student) {
    if (instance.changed('password')) {
      const hashedPassword = await bcrypt.hash(instance.password, 10);
      instance.password = hashedPassword;
    }
  }
}
