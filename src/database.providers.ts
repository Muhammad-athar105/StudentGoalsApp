import { Sequelize } from 'sequelize-typescript';
import { User } from './users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'supereadmin',
        database: 'StudentGoalsApp',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
]; 