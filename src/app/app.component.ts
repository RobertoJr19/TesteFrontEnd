import { Component } from '@angular/core';
import { ConsultApiService } from './consult-api.service';
import { DadosGerais } from './Classes/DadosGerais';
import { TotalControleLancamento } from './Classes/TotalControleLancamento';
import { ControleLancamento } from './Classes/ControleLancamento';
import { LancamentoContaCorrenteCliente } from './Classes/LancamentoContaCorrenteCliente';
import { DomicilioBancarioCliente } from './Classes/DomicilioBancarioCliente';
import { ObjGeral } from './Classes/ObjGeral';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Painel DashBoard Cielo';
  titleVisaoGeral = "DashBoard Visão Geral";
  titleControleLancamento = "DashBoard Controle de Lançamento";

  painelDashBoard: boolean;
  btnVisaoGeral: boolean = false;
  btnControleLancamento: boolean = false;
  dados: any;
  public dadosPesquisa: ObjGeral = new ObjGeral;

  visaoGeral: boolean;
  controleLancamento: boolean;

  constructor(
    private search: ConsultApiService,
    

    ){

  }

  pesquisarDados(){
    this.search.resgatarDados()
    .subscribe(result => {
      this.dados = result

      this.dadosPesquisa.quantidadeLancamentos = this.dados['0'].totalControleLancamento.quantidadeLancamentos;
      this.dadosPesquisa.quantidadeRemessas = this.dados['0'].totalControleLancamento.quantidadeRemessas;
      this.dadosPesquisa.valorLancamentos = this.dados['0'].totalControleLancamento.valorLancamentos;
      this.dadosPesquisa.tamanhoPagina = this.dados['0'].tamanhoPagina;
      this.dadosPesquisa.totalElements = this.dados['0'].totalElements ;
      this.dadosPesquisa.codigoIdentificadorUnico = this.dados['0'].listaControleLancamento['0'].codigoIdentificadorUnico;
      this.dadosPesquisa.dataEfetivaLancamento = this.dados['0'].listaControleLancamento['0'].dataEfetivaLancamento;
      this.dadosPesquisa.dataLancamentoContaCorrenteCliente = this.dados['0'].listaControleLancamento['0'].dataLancamentoContaCorrenteCliente;
      this.dadosPesquisa.dateEfetivaLancamento = this.dados['0'].listaControleLancamento['0'].dateEfetivaLancamento;
      this.dadosPesquisa.dateLancamentoContaCorrenteCliente = this.dados['0'].listaControleLancamento['0'].dateLancamentoContaCorrenteCliente;
      this.dadosPesquisa.descricaoGrupoPagamento = this.dados['0'].listaControleLancamento['0'].descricaoGrupoPagamento;
      this.dadosPesquisa.nomeBanco = this.dados['0'].listaControleLancamento['0'].nomeBanco;
      this.dadosPesquisa.numeroEvento = this.dados['0'].listaControleLancamento['0'].numeroEvento;
      this.dadosPesquisa.numeroRaizCNPJ = this.dados['0'].listaControleLancamento['0'].numeroRaizCNPJ;
      this.dadosPesquisa.numeroSufixoCNPJ = this.dados['0'].listaControleLancamento['0'].numeroSufixoCNPJ;
      this.dadosPesquisa.quantidadeLancamentoRemessa = this.dados['0'].listaControleLancamento['0'].quantidadeLancamentoRemessa;
      this.dadosPesquisa.valorLancamentoRemessa = this.dados['0'].listaControleLancamento['0'].valorLancamentoRemessa;
      this.dadosPesquisa.nomeSituacaoRemessa = this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.nomeSituacaoRemessa;
      this.dadosPesquisa.nomeTipoOperacao = this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.nomeTipoOperacao;
      this.dadosPesquisa.numeroRemessaBanco = this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.numeroRemessaBanco;
      this.dadosPesquisa.codigoBanco = this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.dadosDomicilioBancario.codigoBanco;
      this.dadosPesquisa.numeroAgencia = this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia;
      this.dadosPesquisa.numeroContaCorrente = this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente;

     //console.log('Variavel DadosPesquisa TESTE: ', this.dados['0'].listaControleLancamento['0'].lancamentoContaCorrenteCliente.dadosDomicilioBancario);
     
      console.log('Variavel DadosPesquisa - Resultado final: ', this.dadosPesquisa);
    });
  }

  ngOnInit(){
    this.painelDashBoard = false;
        
  }


  onClickHomePage(){
    this.painelDashBoard = true;
    this.btnVisaoGeral = false;
    this.btnControleLancamento = false;
  }

  pagDefault(){
    this.visaoGeral = false;
    this.controleLancamento = false;
    this.painelDashBoard = false;    
    this.btnVisaoGeral = false;
    this.btnControleLancamento = false;
  }

  onClickVisaoGeral(){
    this.pesquisarDados();
    this.btnVisaoGeral = true;
    this.btnControleLancamento = false;
    this.painelDashBoard = true;
    this.visaoGeral = true;
    this.controleLancamento = false;  
      
  }

  onClickControleLancamento(){
    this.pesquisarDados();
    this.btnVisaoGeral = false;
    this.btnControleLancamento = true;
    this.painelDashBoard = true;
    this.visaoGeral = false;
    this.controleLancamento = true;
   
  }





}
