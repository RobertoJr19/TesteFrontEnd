import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DADOSAPI } from 'src/environments/environment';
import { DadosGerais } from './Classes/DadosGerais';
import { TotalControleLancamento } from './Classes/TotalControleLancamento';
import { ControleLancamento } from './Classes/ControleLancamento';
import { LancamentoContaCorrenteCliente } from './Classes/LancamentoContaCorrenteCliente';
import { DomicilioBancarioCliente } from './Classes/DomicilioBancarioCliente';
import { Observable } from 'rxjs';
import { ObjGeral } from './Classes/ObjGeral';


@Injectable({
  providedIn: 'root'
})
export class ConsultApiService {

  //dadosPesquisa: ObjGeral = new ObjGeral();
  dadosPesquisa: string;
  teste: any;

  constructor(
    private consultApi: HttpClient,
    private _dadosGerais: DadosGerais = new DadosGerais,
    private _totalControleLancamento: TotalControleLancamento = new TotalControleLancamento(),
    private _controleLancamento: ControleLancamento = new ControleLancamento(),
    private _lancamentoContaCorrenteCliente: LancamentoContaCorrenteCliente = new LancamentoContaCorrenteCliente(),
    private _domicilioBancarioCliente: DomicilioBancarioCliente = new DomicilioBancarioCliente()
    ) { }


  resgatarDados() {
   return this.consultApi.get(`${DADOSAPI}`)
          
    // .subscribe(result => {
    //   this.teste = result
    //   this.dadosPesquisa = this.teste;
      // console.log('Variavel Teste: ', this.teste);
      // console.log('Variavel DadosPesquisa: ', this.dadosPesquisa);
    //});
      
     
  
  }

    dadosGerais(){  

      console.log('variavel --| _dadosGerais |-- com valor: ', this.dadosPesquisa);
     
    }

    totalControleLancamento(){
  
     
    }

    controleLancamento(){
     
    }

    lancamentoContaCorrenteCliente(){
     
    }

    domicilioBancarioCliente(){
      
    }


    
}
    


