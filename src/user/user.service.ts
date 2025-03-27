import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interface/IUser';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const hashedPassword = await hash(createUserDto.password, 10);

        return {
            id: 1,
            ...createUserDto,
            password: hashedPassword,
        };
    }

    async findAll(): Promise<IUser[]> {
        return [
            {
                id: 1,
                name: 'Test User',
                email: 'test@example.com',
                phone: '1234567890',
                cpf: '12345678901',
                password: 'password',
            },
        ];
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
