import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './customer.entity';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo Video Game' })
  @ApiResponse({ status: 201, description: 'Video Game criado com sucesso', type: Customer })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os Video Games' })
  @ApiResponse({ status: 200, description: 'Lista de Video Game retornada com sucesso', type: [Customer] })
  async findAll(): Promise<Customer[]> {
    return await this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Video Game por ID' })
  @ApiParam({ name: 'id', description: 'ID do Video Game' })
  @ApiResponse({ status: 200, description: 'Video Game encontrado', type: Customer })
  @ApiResponse({ status: 404, description: 'Video Game não encontrado' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    return await this.customersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Video Game' })
  @ApiParam({ name: 'id', description: 'ID do Video Game' })
  @ApiResponse({ status: 200, description: 'Video Game atualizado com sucesso', type: Customer })
  @ApiResponse({ status: 404, description: 'Video Game não encontrado' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return await this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover Video Game' })
  @ApiParam({ name: 'id', description: 'ID do Video Game' })
  @ApiResponse({ status: 204, description: 'Video Game removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Video Game não encontrado' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.customersService.remove(id);
  }
}
