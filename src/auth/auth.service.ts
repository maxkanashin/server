import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PasswordService } from './password.service';

import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private passwordService: PasswordService,
        private jwtService: JwtService,
    ) { }

    async signUp(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (user) {
            throw new BadRequestException({ type: 'email-exist' });
        }
        const salt = this.passwordService.getSalt();
        const hash = this.passwordService.getHash(password, salt);
        const newUser = await this.usersService.create(email, hash, salt);
        const accessToken = await this.jwtService.signAsync({ id: newUser.id, email: newUser.email });

        return { accessToken }
    }

    signIn(email: string, password: string) { }

    signOut() { }
}
