import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule {}
