import { Component, OnInit } from '@angular/core';
import {
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  LineController,
  PointElement, LineElement
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// Registrar las escalas, controladores y otros componentes necesarios de Chart.js
Chart.register(LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, PointElement, LineElement);

@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  public chartData?: ChartData<'line'>;

  ngOnInit() {
    this.chartData = {
      labels: ['Parada 1', 'Parada 2', 'Parada 3', 'Parada 4', 'Parada 5', 'Parada 6', 'Parada 7', 'Parada 8', 'Parada 9', 'Parada 10'], // Etiquetas del eje X
      datasets: [
        {
          data: [65, 59, 80, 72, 55, 90, 60, 82, 75, 88],
          label: 'Personas Bajan',
          fill: false,
          borderColor: '#c2efa7',
          tension: 0.1 },
        {
          data: [45, 50, 60, 55, 40, 80, 70, 65, 50, 72],
          label: 'Personas Suben',
          fill: false,
          borderColor: '#54b028',
          tension: 0.1
        },
      ],
    };
  }

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ruta 79 Chubuma Glorieta los Cantaritos  ',
        },
        type: 'category',  // Escala de tipo categoría para el eje X
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad de personas',
        },
        type: 'linear',  // Escala de tipo lineal para el eje Y
      },
    },
  };
}
