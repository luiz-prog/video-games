import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('customers')
export class Customer {
  @ApiProperty({ description: 'ID único do Video Game' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nome completo do Video Game' })
  @Column({ length: 255 })
  full_name: string;
  
}
