import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CgrUsersService } from './cgr_users.service';
import { CreateCgrUserDto } from './dto/create-cgr_user.dto';
import { UpdateCgrUserDto } from './dto/update-cgr_user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('cgr-users')
export class CgrUsersController {
  constructor(private readonly cgrUsersService: CgrUsersService) {}

  @Post()
  create(@Body() createCgrUserDto: CreateCgrUserDto) {
    return this.cgrUsersService.create(createCgrUserDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.cgrUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cgrUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCgrUserDto: UpdateCgrUserDto) {
    return this.cgrUsersService.update(+id, updateCgrUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cgrUsersService.remove(+id);
  }
}
