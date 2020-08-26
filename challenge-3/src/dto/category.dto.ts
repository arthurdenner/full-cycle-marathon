import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({
    type: String,
    description: 'name of the category',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
