import { PartialType } from '@nestjs/mapped-types';
import { CreateCgrUserDto } from './create-cgr_user.dto';

export class UpdateCgrUserDto extends PartialType(CreateCgrUserDto) {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
