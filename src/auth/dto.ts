import { ApiProperty } from "@nestjs/swagger";

export class SignUpBodyDto {
    @ApiProperty({
        example: 'test@gmail.com'
    })
    email: string;

    @ApiProperty({
        example: 'qwerty'
    })
    password: string;
}

export class SignInBodyDto {
    @ApiProperty({
        example: 'test@gmail.com'
    })
    email: string;

    @ApiProperty({
        example: 'qwerty'
    })
    password: string;
}

export class GetSessionInfoDto {
    @ApiProperty()
    id: string;

    @ApiProperty({
        example: 'test@gmail.com'
    })
    email: string;
}