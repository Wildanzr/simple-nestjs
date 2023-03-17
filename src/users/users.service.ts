import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'John Doe',
    },
    {
      id: 2,
      username: 'Jane Doe',
    },
    {
      id: 3,
      username: 'John Smith',
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const { username } = createUserDto;
    const newUser = {
      id: this.users.length + 1,
      username,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto): User {
    const { id, username } = updateUserDto;
    const user = this.users.find((user) => user.id === id);
    user.username = username;

    return user;
  }

  deleteUser(id: number): User {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return null;
    }

    const user = this.users.splice(userIndex, 1)[0];

    return user;
  }
}
