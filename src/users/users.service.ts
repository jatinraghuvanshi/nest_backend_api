import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(data: Partial<User>): Promise<User> {
    data.password = await bcrypt.hash(data.password as string, 10);
    return this.userRepo.save(data);
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    await this.userRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.userRepo.delete(id);
  }
}
