import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CategoriesQueryToArrayPipe implements PipeTransform {
  transform(value: string) {
    if (!value) return;
    const ret = JSON.parse(value);
    return ret;
  }
}
