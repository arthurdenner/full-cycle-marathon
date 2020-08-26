import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { Category } from 'src/models/category.model';
import { CategoryDto } from 'src/dto/category.dto';
import { CategoryResponse } from 'src/api-doc/category.response';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  @Get()
  getAllCategories(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  @ApiCreatedResponse({
    type: CategoryResponse,
  })
  @Post()
  createCategory(@Body() body: CategoryDto): Promise<Category> {
    const category = this.categoryRepo.create(body);

    return this.categoryRepo.save(category);
  }
}
