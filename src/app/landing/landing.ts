import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  menuActive = true;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }
}
