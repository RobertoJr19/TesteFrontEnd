import { NgModule } from '@angular/core';

import { DadosGerais } from './DadosGerais';
import { TotalControleLancamento } from './TotalControleLancamento';
import { ControleLancamento } from './ControleLancamento';
import { LancamentoContaCorrenteCliente } from './LancamentoContaCorrenteCliente';
import { DomicilioBancarioCliente } from './DomicilioBancarioCliente';



@NgModule({
  declarations: [
    DadosGerais,
    TotalControleLancamento,
    ControleLancamento,
    LancamentoContaCorrenteCliente,
    DomicilioBancarioCliente
  ],
  imports: [
    DadosGerais,
    TotalControleLancamento,
    ControleLancamento,
    LancamentoContaCorrenteCliente,
    DomicilioBancarioCliente
  ],
  exports:[
    DadosGerais,
    TotalControleLancamento,
    ControleLancamento,
    LancamentoContaCorrenteCliente,
    DomicilioBancarioCliente
  ]
})

export class ClassesModule {}
