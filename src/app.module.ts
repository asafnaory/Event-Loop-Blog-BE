import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BlogModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
