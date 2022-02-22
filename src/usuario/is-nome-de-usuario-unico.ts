import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from './usuario.service';

@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint
  implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}

  validate(
    nomeDeUsuario: string,
    validationArguments?: ValidationArguments,
  ): boolean {
    return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
  }
}

export function IsUserAlreadyExist(
  validationOptions?: ValidationOptions,
): (object: Object, propertyName: string) => void {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeDeUsuarioUnicoConstraint,
    });
  };
}
