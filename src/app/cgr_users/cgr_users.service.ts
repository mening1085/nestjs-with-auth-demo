import { Injectable } from '@nestjs/common';
import { CreateCgrUserDto } from './dto/create-cgr_user.dto';
import { UpdateCgrUserDto } from './dto/update-cgr_user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CgrUser } from './entities/cgr_user.entity';
import { Repository } from 'typeorm';
import { log } from 'console';
import * as bcrypt from 'bcrypt';
export type User = any;
@Injectable()
export class CgrUsersService {
  constructor(
    @InjectRepository(CgrUser)
    private cgrUserRepository: Repository<CgrUser>,
  ) {}

  create(createUserDto: CreateCgrUserDto) {
    // Hash password
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
    const newUser = this.cgrUserRepository.create({
      ...createUserDto,
      created_at: new Date(),
      updated_at: new Date(),
    });
    log('newUser', newUser);

    return this.cgrUserRepository.save(newUser);
  }

  findAll() {
    return this.cgrUserRepository.find();
  }

  findOne(id: number) {
    return this.cgrUserRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string) {
    return await this.cgrUserRepository.findOne({
      where: {
        email: username,
      },
    });
  }

  update(id: number, updateUserDto: UpdateCgrUserDto) {
    return this.cgrUserRepository.update(id, {
      ...updateUserDto,
      updated_at: new Date(),
    });
  }

  remove(id: number) {
    return this.cgrUserRepository.delete(id);
  }
}
