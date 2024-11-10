import { Component } from '@angular/core';
import {GoogleMap, MapHeatmapLayer} from "@angular/google-maps";

@Component({
  selector: 'app-mapa-calor',
  standalone: true,
  imports: [
    GoogleMap,
    MapHeatmapLayer
  ],
  templateUrl: './mapa-calor.component.html',
  styleUrl: './mapa-calor.component.scss'
})
export class MapaCalorComponent {
    center = {lat: 20.97537, lng: -89.61696};
    zoom = 13;
    heatmapOptions = {
      radius: 30,
      opacity: 0.8,
      gradient: [
        'rgba(0, 0, 255, 0)',
        'rgba(0, 255, 255, 0.4)',
        'rgba(0, 255, 0, 0.6)',
        'rgba(255, 255, 0, 0.8)',
        'rgba(255, 0, 0, 1)'
      ]
    };
    heatmapData = [
      // Zona Norte - Plaza Fiesta (área comercial)
      {lat: 20.9950, lng: -89.6214, weight: 9},
      {lat: 20.9955, lng: -89.6220, weight: 8},
      {lat: 20.9948, lng: -89.6210, weight: 7},
      {lat: 20.9952, lng: -89.6218, weight: 8},

      // Gran Plaza y alrededores (centro comercial importante)
      {lat: 21.0022, lng: -89.6217, weight: 10},
      {lat: 21.0025, lng: -89.6220, weight: 9},
      {lat: 21.0020, lng: -89.6215, weight: 8},
      {lat: 21.0018, lng: -89.6213, weight: 7},

      // Centro Histórico - alta densidad
      {lat: 20.9675, lng: -89.6240, weight: 10},
      {lat: 20.9680, lng: -89.6235, weight: 9},
      {lat: 20.9677, lng: -89.6238, weight: 8},
      {lat: 20.9673, lng: -89.6242, weight: 9},
      {lat: 20.9678, lng: -89.6237, weight: 8},

      // Zona Universidad - concentración de estudiantes
      {lat: 20.9850, lng: -89.6000, weight: 8},
      {lat: 20.9855, lng: -89.6005, weight: 7},
      {lat: 20.9848, lng: -89.5998, weight: 6},
      {lat: 20.9852, lng: -89.6002, weight: 7},

      // Ciudad Industrial - zona laboral
      {lat: 20.9400, lng: -89.6566, weight: 8},
      {lat: 20.9405, lng: -89.6570, weight: 7},
      {lat: 20.9398, lng: -89.6568, weight: 6},
      {lat: 20.9402, lng: -89.6572, weight: 7},

      // Francisco de Montejo - zona residencial
      {lat: 21.0150, lng: -89.6650, weight: 6},
      {lat: 21.0155, lng: -89.6655, weight: 5},
      {lat: 21.0148, lng: -89.6648, weight: 4},
      {lat: 21.0152, lng: -89.6652, weight: 5},

      // Altabrisa - zona comercial y residencial
      {lat: 21.0100, lng: -89.5900, weight: 8},
      {lat: 21.0105, lng: -89.5905, weight: 7},
      {lat: 21.0098, lng: -89.5898, weight: 6},
      {lat: 21.0102, lng: -89.5902, weight: 7},

      // Plaza Las Américas
      {lat: 20.9775, lng: -89.5920, weight: 9},
      {lat: 20.9780, lng: -89.5925, weight: 8},
      {lat: 20.9773, lng: -89.5918, weight: 7},
      {lat: 20.9778, lng: -89.5922, weight: 8},

      // Zona de hospitales
      {lat: 20.9900, lng: -89.6100, weight: 7},
      {lat: 20.9905, lng: -89.6105, weight: 6},
      {lat: 20.9898, lng: -89.6098, weight: 5},
      {lat: 20.9902, lng: -89.6102, weight: 6},

      // Caucel - zona residencial en crecimiento
      {lat: 20.9950, lng: -89.7000, weight: 5},
      {lat: 20.9955, lng: -89.7005, weight: 4},
      {lat: 20.9948, lng: -89.6998, weight: 3},
      {lat: 20.9952, lng: -89.7002, weight: 4}
    ];
}
