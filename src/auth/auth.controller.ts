import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Student } from '../entities/student.entity';


@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  create(@Body() userData): Promise<Student> {
    return this.authService.create(userData);
  }

  @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body () req) {
        return await this.authService.login(req.user);
    }

}
