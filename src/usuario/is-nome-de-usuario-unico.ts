export function IsUserAlreadyExist(
  validationOptions?: ValidationOptions,
): (object: Object, propertyName: string) => void {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistConstraint,
    });
  };
}
