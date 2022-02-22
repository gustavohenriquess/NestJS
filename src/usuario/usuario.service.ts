import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor() {}

  private usuarios = [];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
}
