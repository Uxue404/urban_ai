import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle } from "@angular/material/card";
import { MatCalendar } from "@angular/material/datepicker";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';  // Importar ReactiveFormsModule y FormControl


@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatCalendar,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {
  selected : Date | null  = null
  calendarioForm: FormGroup;

  constructor() {
    this.calendarioForm = new FormGroup({
      fecha: new FormControl(null)
    });
  }

  onDateChange(date: any){
    this.calendarioForm.get('fecha')?.setValue(date);
    console.log(this.calendarioForm.get('fecha')?.value);
  }
}
