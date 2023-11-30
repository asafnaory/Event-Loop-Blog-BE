import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrors } from 'src/helpers/helpers';
import { CreateOrUpdateBlogSchema } from './dto/blog-schema';
import { Blog } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string): Promise<Blog | null> {
    try {
      const blogData = await this.prisma.blog.findUnique({
        where: { id },
      });
      if (!blogData) throw new NotFoundException('Blog not found');
      return blogData;
    } catch (err: unknown) {
      handleErrors(err);
    }
  }

  async update(
    id: string,
    updateBlogDto: CreateOrUpdateBlogSchema,
  ): Promise<Blog> {
    try {
      return await this.prisma.blog.upsert({
        where: { id },
        create: { ...updateBlogDto, id },
        update: { ...updateBlogDto },
      });
    } catch (err: unknown) {
      handleErrors(err);
    }
  }

  async remove(id: string): Promise<Blog> {
    try {
      return await this.prisma.blog.delete({ where: { id } });
    } catch (err: unknown) {
      handleErrors(err);
    }
  }
}
