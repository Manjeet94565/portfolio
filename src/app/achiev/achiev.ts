import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achiev',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './achiev.html',
  styleUrl: './achiev.css',
})
export class Achiev {
  menuActive = true;

  certificates = [
    {
      title: 'Microsoft Data Analysis',
      issuer: 'Microsoft',
      year: '2025',
      image: '/assets/certificcate microsoft data analysis.png'
    },
    {
      title: 'Coding Ninja Certificate',
      issuer: 'Coding Ninja',
      year: '2024',
      image: '/assets/codingninja certificate.jpg'
    },
    {
      title: 'Deloitte Internship',
      issuer: 'Deloitte',
      year: '2025',
      image: '/assets/deloitte certificate_internship.png'
    },
    {
      title: 'Problem Solving Basic',
      issuer: 'HackerRank',
      year: '2024',
      image: '/assets/problem_solving_basic certificate-1.png'
    }
  ];

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }
}
