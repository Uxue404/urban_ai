import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-typing-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing-effect.component.html',
  styleUrl: './typing-effect.component.scss'
})
export class TypingEffectComponent {
  @Input() text: string = '';
  displayedLines: string[] = [];
  typingSpeed: number = 50; // Velocidad de escritura por carácter
  lineDelay: number = 1000; // Retraso entre líneas

  ngOnInit(): void {
    this.typeTextLineByLine();
  }

  typeTextLineByLine(): void {
    const lines = this.text.split('\n');
    let currentLineIndex = 0;

    const typeLine = () => {
      if (currentLineIndex < lines.length) {
        this.displayedLines.push(''); // Añadir un espacio para la nueva línea
        this.displayLine(lines[currentLineIndex], 0, () => {
          currentLineIndex++;
          setTimeout(typeLine, this.lineDelay); // Retraso antes de la siguiente línea
        });
      }
    };

    typeLine();
  }

  displayLine(line: string, charIndex: number, callback: () => void): void {
    if (charIndex < line.length) {
      const lineIndex = this.displayedLines.length - 1; // Índice de la última línea añadida
      this.displayedLines[lineIndex] += line.charAt(charIndex);
      setTimeout(() => this.displayLine(line, charIndex + 1, callback), this.typingSpeed);
    } else {
      callback();
    }
  }
}
