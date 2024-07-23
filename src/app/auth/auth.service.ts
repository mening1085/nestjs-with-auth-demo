import { BadRequestException, Injectable } from '@nestjs/common';
import { CgrUsersService } from '../cgr_users/cgr_users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ResponseUserDto } from '../cgr_users/dto/response-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: CgrUsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<ResponseUserDto> {
    const user = await this.usersService.findByUsername(username);

    // check if user exists
    if (!user) {
      throw new BadRequestException('User does not exist');
    }
    // check if password matches
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Password does not match');
    }

    // sign and return token
    const res = await this.jwtService.signAsync({ id: user.id });
    return {
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      access_token: res,
    };
  }

  async validateToken(token: string) {
    try {
      return await this.jwtService.verifyAsync(token);
    } catch (e) {
      throw new BadRequestException('Invalid token');
    }
  }

  async signOut() {
    // sign out logic
  }
}
