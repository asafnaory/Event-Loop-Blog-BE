import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodError, ZodObject } from 'zod';
import { fromZodError } from 'zod-validation-error';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: unknown) {
    try {
      this.schema.strict().parse(value);
    } catch (err: unknown) {
      const error = err as ZodError;
      throw new BadRequestException('Validation failed' + fromZodError(error));
    }
    return value;
  }
}
