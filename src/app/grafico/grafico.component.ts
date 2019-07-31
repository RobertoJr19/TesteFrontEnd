import { Component, OnInit } from '@angular/core';
import { ConsultApiService } from '../consult-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  chart = [];  
  
  constructor(private _consultApi: ConsultApiService) { }

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
       


     });

     //console.log('Dados Obtidos graficoComponent: ', dtLancamentos);

     /*
     this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dtLancamentoCcCliente,
        datasets: [
          { 
            data: codIdentUnico,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: dtEfetivaLancamento,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });



   })

  */

  }
   

}
