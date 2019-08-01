import { Component, OnInit } from '@angular/core';
import { ConsultApiService } from '../consult-api.service';
import { Chart } from 'chart.js';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  chart = [];  
  
  constructor(
    private _consultApi: ConsultApiService,
    private dados: AppComponent
    ) { }

  ngOnInit() {
   this._consultApi.resgatarDados()
   .subscribe(res => {
     //console.log('Dados Obtidos graficoComponent: ', res);


    //  let codIdentUnico = res['codigoIdentificadorUnico'].map(res => res.main.codIdentUnico);
    //  let dtEfetivaLancamento = res['dateEfetivaLancamento'].map(res => res.main.dtEfetivaLancamento);
    //  let dtLancamentoCcCliente = res['dateLancamentoContaCorrenteCliente'].map(res => res.main.dtLancamentoCcCliente);

    //  let dtLancamentos = []
    //  dtLancamentoCcCliente.forEach((res) => {
    //    const datejs = new Date(res * 1000)
    //    dtLancamentoCcCliente.push(datejs.toLocaleTimeString('pt-br', {day: 'numeric', month:'short', year:'numeric'}))
    
     this.grafico1();
     this.grafico2();
     this.grafico3();

     });

     //console.log('Dados Obtidos graficoComponent: ', dtLancamentos);

     

  }

  grafico1(){

    var canvas = <HTMLCanvasElement>document.getElementById('myChart1');
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
        labels: ['Qtd. de Lançamentos'],
        datasets: [{
          label: 'Qtd. de Lançamentos',
          backgroundColor: '#00AEEF',
          borderColor: '#000000',
          data: [this.dados.dadosPesquisa.quantidadeLancamentos]
          // data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },
  
      // Configuration options go here
      options: {}
    });   


  }

  grafico2(){

    var canvas = <HTMLCanvasElement>document.getElementById('myChart2');
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
        labels: ['Qtd. de Remessas'],
        datasets: [{
          label: 'Qtd. de Remessas',
          backgroundColor: '#11ff66',
          borderColor: '#111111',
          data: [this.dados.dadosPesquisa.quantidadeRemessas]
        }]
      },
  
      // Configuration options go here
      options: {}
    });   


  }

grafico3(){

  var canvas = <HTMLCanvasElement>document.getElementById('myChart3');
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
        labels: ['Valor de Lançamentos'],
        datasets: [{
          label: 'Valor de Lançamentos',
          backgroundColor: '#fff33f',
          borderColor: '#111111',
          data: [this.dados.dadosPesquisa.valorLancamentos]
        }]
      },
  
      // Configuration options go here
      options: {}
    });   


}

   

}
