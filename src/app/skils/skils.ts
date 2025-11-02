import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-skils',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './skils.html',
  styleUrl: './skils.css',
})
export class Skils {
  menuActive = true;

  technologies = [
    { name: 'Angular', logo: '/assets/Angular.png' },
    { name: 'JavaScript', logo: '/assets/javascript.png' },
    { name: 'TypeScript', logo: '/assets/ts.png' },
    { name: 'HTML5', logo: '/assets/html5.png' },
    { name: 'CSS3', logo: '/assets/css3.png' },
    { name: 'Python', logo: '/assets/python.png' },
    { name: 'Java', logo: '/assets/java.png' },
    { name: 'C', logo: '/assets/C.png' },
    { name: 'MySQL', logo: '/assets/mysql.png' },
    { name: 'Firebase', logo: '/assets/firebase.png' },
    { name: 'Git', logo: '/assets/git.png' },
    { name: 'GitHub', logo: '/assets/github.png' },
    { name: 'Bootstrap', logo: '/assets/bootstrap.png' },
    { name: 'Flask', logo: '/assets/flask.png' },
    { name: 'Android', logo: '/assets/android.png' }
  ];

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }
}
