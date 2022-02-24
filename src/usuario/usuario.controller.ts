import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { NestResponse } from './core/http/nest-response';
import { NestResponseBuilder } from './core/http/nest-response-builder';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  public cria(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({ location: `/users/${usuarioCriado.nomeDeUsuario}` })
      .comBody(usuarioCriado)
      .build();
  }

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(
    @Param('nomeDeUsuario') nomeDeUsuario: string,
  ): Usuario {
    return this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
  }
}
