import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface HackathonEvent {
  name: string;
  date: string;
  year: string;
  location: string;
  description: string;
  image: string;
  photos: string[];
}

@Component({
  selector: 'app-hackathon',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './hackathon.html',
  styleUrl: './hackathon.css',
})
export class Hackathon {
  menuActive = true;
  selectedEvent: HackathonEvent | null = null;

  hackathons: HackathonEvent[] = [
    {
      name: 'Hackathon 2024',
      date: 'January 20',
      year: '2024',
      location: 'Delhi, India',
      description: 'Participated in a 48-hour hackathon, building innovative solutions with a team.',
      image: '/assets/problem_solving_basic certificate-1.png',
      photos: ['/assets/certificcate microsoft data analysis.png', '/assets/codingninja certificate.jpg']
    }
  ];

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  viewPhotos(event: HackathonEvent) {
    this.selectedEvent = event;
  }

  closeModal() {
    this.selectedEvent = null;
  }
}
