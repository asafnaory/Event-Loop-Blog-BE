import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodError, ZodObject } from 'zod';
import { fromZodError } from 'zod-validation-error';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: unknown) {
    console.log('ZodValidationPipe');
    try {
      this.schema.strict().parse(value);
    } catch (err: unknown) {
      const error = err as ZodError;
      console.log(fromZodError(error));
      throw new BadRequestException('Validation failed' + fromZodError(error));
    }
    return value;
  }
}
