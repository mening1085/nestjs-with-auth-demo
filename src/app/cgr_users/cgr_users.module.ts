import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CgrUsersService } from './cgr_users.service';
import { CgrUsersController } from './cgr_users.controller';
import { CgrUser } from './entities/cgr_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CgrUser])],
  controllers: [CgrUsersController],
  providers: [CgrUsersService],
  exports: [CgrUsersService],
})
export class CgrUsersModule {}
