import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function StartWith(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'startWith',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, validationArguments?: ValidationArguments) {
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          return `Name should start with ${prefix}`;
        },
      },
    });
  };
}
