import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { Loading } from './loading/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, Loading],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('side');
  isLoading = true;
  loadingPercent = 0;
  loadingMessage = 'LOADING...';

  ngOnInit() {
    // Simulate loading
    const interval = setInterval(() => {
      this.loadingPercent += 5;
      if (this.loadingPercent >= 100) {
        this.loadingPercent = 100;
        setTimeout(() => this.isLoading = false, 500);
        clearInterval(interval);
      }
    }, 200);
  }
}
