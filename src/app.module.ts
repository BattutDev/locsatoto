import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import * as NestConfig from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    NestConfig.ConfigModule.forRoot({ envFilePath: '.env' }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
