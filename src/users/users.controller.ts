import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUserById(+id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: CreateUserDto): User {
    return this.userService.updateUser({ id: +id, ...body });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): User {
    return this.userService.deleteUser(+id);
  }
}
