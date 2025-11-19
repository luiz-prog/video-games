import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ 
    description: 'Nome completo do Video Game',
    example: 'Playstation 5',
    minLength: 2,
    maxLength: 255
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  full_name: string;

}
