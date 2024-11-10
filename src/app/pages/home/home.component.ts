import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule
} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {CalendarioComponent} from "../../../shared/components/calendario/calendario.component";
import {CommonModule} from "@angular/common";
import {GraficaComponent} from "../../../shared/components/grafica/grafica.component";
import {MapaCalorComponent} from "../../../shared/components/mapa-calor/mapa-calor.component";
import data from '../../../shared/assets/analisis_data.json';
import {
  ArcElement,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  PieController,
  Title,
  Tooltip
} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {TypingEffectComponent} from "../../../shared/components/typing-effect/typing-effect.component";


// Registrar las escalas, controladores y otros componentes necesarios de Chart.js
Chart.register(PieController, CategoryScale, Title, Tooltip, Legend, ArcElement);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatCardActions,
    MatCardFooter,
    MatProgressBar,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    CalendarioComponent,
    MatProgressBarModule,
    CommonModule,
    GraficaComponent,
    MapaCalorComponent,
    BaseChartDirective,
    TypingEffectComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public chartData?: ChartData<'doughnut'>;
  secciones: any


  ngOnInit(){
    this.secciones = data.secciones
    this.chartData = {
      labels: ['Ruta 1', 'Ruta 2', 'Ruta 3', 'Ruta 4'],
      datasets: [
        {
          label: 'Cantidad de Camiones por Ruta',
          data: [40, 30, 20, 10],
          backgroundColor: [
            '#c2efa7',
            '#9be373',
            '#77d348',
            '#54b028'
          ],
          hoverOffset: 4
        }
      ]
    }
  }

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title : {
        display: true,
        text: 'Grafica de pastel'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            // Personaliza el texto del tooltip si lo deseas
            return tooltipItem.raw + '%';
          },
        },
      },
    },
  }


  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: string[] = ['Ruta 1', 'Ruta 2', 'Ruta 3', 'Ruta 4'];  // Las rutas
  // public pieChartData: number[] = [40, 30, 20, 10];  // Los valores ficticios de camiones por ruta
  // public pieChartType: string = 'pie';

  recomendaciones = ['Recomendación 1']

  total: number = 100; // Capacidad total disponible
  ocupados: number = 75; // Número de unidades ocupadas

  get ocupabilidad(): number {
    // Calcula el porcentaje de ocupabilidad (ocupados/total * 100)
    return (this.ocupados / this.total) * 100;
  }
}
