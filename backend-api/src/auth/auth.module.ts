import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [JwtService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
