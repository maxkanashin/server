import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';

import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('sign-up')
    @ApiCreatedResponse()
    async signUp(@Body() body: SignUpBodyDto, @Res({ passthrough: true }) res: Response) {
        const { accessToken } = await this.authService.signUp(body.email, body.password);
        console.log(accessToken);
        return { data: 'ok' }
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signIn(@Body() body: SignInBodyDto) { }

    @Post('sign-out')
    @HttpCode(HttpStatus.OK)
    signOut() { }

    @Get('session')
    @ApiOkResponse({
        type: GetSessionInfoDto
    })
    @HttpCode(HttpStatus.OK)
    getSessionsInfo() { }

}
