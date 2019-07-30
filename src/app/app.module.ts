import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultApiService } from './consult-api.service';
import { ClassesModule } from './Classes/classes.module';
import { DadosGerais } from './Classes/DadosGerais';
import { TotalControleLancamento } from './Classes/TotalControleLancamento';
import { ControleLancamento } from './Classes/ControleLancamento';
import { LancamentoContaCorrenteCliente } from './Classes/LancamentoContaCorrenteCliente';
import { DomicilioBancarioCliente } from './Classes/DomicilioBancarioCliente';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConsultApiService,
    DadosGerais,
    TotalControleLancamento,
    ControleLancamento,
    LancamentoContaCorrenteCliente,
    DomicilioBancarioCliente
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
