import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  menuActive = true;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }
}
