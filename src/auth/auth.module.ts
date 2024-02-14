import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/students/students.module';
// import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule, UsersModule],
  providers: [AuthService, ],
  controllers: [AuthController]
})
export class AuthModule { }
