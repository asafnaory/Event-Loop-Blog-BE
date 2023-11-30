import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import {
  CreateOrUpdateBlogSchema,
  createOrUpdateBlogSchema,
} from './dto/blog-schema';
import { Blog } from '@prisma/client';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Blog | null> {
    return this.blogService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(204)
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(createOrUpdateBlogSchema))
    updateBlogDto: CreateOrUpdateBlogSchema,
  ): Promise<Blog> {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Blog> {
    return this.blogService.remove(id);
  }
}
