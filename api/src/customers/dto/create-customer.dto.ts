import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsDateString, MinLength, MaxLength } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ 
    description: 'Nome completo do Video Game',
    example: 'Playstation 1',
    minLength: 2,
    maxLength: 255
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  full_name: string;

  @ApiProperty({ 
    description: 'Fabricante',
    example: 'Sony',
    maxLength: 255
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  fabricante: string;

  @ApiProperty({ 
    description: 'Data lançamento',
    example: '1995-05-15',
    format: 'date'
  })
  @IsDateString()
  @IsNotEmpty()
  lanc_date: string;

  @ApiProperty({ 
    description: 'Preço',
    example: '1.199,99',
    minLength: 2,
    maxLength: 255
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  valor: number;
}