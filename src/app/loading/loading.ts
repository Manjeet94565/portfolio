import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading implements OnInit {
  @Input() progress: number = 0; // From 0 to 100
  @Input() message: string = 'UPLOADING VIRUS...';

  matrixColumns: any[] = [];
  terminalLines: string[] = [
    'Accessing Target IP...',
    'Bypassing Firewall...',
    'Uploading Payload...',
    'Initializing system...',
    'Loading modules: ' + this.progress + '%',
    'Decrypting data streams...',
    'Establishing secure connection...'
  ];

  ngOnInit() {
    this.generateMatrixRain();
  }

  private generateMatrixRain() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    for (let i = 0; i < 30; i++) {
      const columnChars = [];
      for (let j = 0; j < 40; j++) {
        columnChars.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      this.matrixColumns.push({
        left: Math.random() * 100,
        delay: Math.random() * 2000,
        chars: columnChars
      });
    }
  }
}
