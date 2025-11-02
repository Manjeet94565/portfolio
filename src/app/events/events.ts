import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Event {
  name: string;
  date: string;
  year: string;
  location: string;
  description: string;
  image: string;
  photos: string[];
}

@Component({
  selector: 'app-events',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  menuActive = true;
  selectedEvent: Event | null = null;

  events: Event[] = [
    {
      name: 'hackshastra tech event 2025',
      date: 'Oct 30',
      year: '2025',
      location: 'Gaziabad, India',
      description: 'Attended a major tech conference featuring talks on emerging technologies and networking opportunities.',
      image: '/assets/photo 1.jpg',
      photos: ['/assets/photo 1.jpg', '/assets/photo 2.jpg', '/assets/photo 3.png', '/assets/photo 4.jpg', '/assets/photo 5.jpg', '/assets/photo 6.jpg', '/assets/photo 7.jpg', '/assets/photo 8.jpg']
    },
    // {
    //   name: 'Hackathon 2024',
    //   date: 'January 20',
    //   year: '2024',
    //   location: 'Delhi, India',
    //   description: 'Participated in a 48-hour hackathon, building innovative solutions with a team.',
    //   image: '/assets/problem_solving_basic certificate-1.png',
    //   photos: ['/assets/certificcate microsoft data analysis.png', '/assets/codingninja certificate.jpg']
    // },
    // {
    //   name: 'Developer Meetup',
    //   date: 'May 10',
    //   year: '2024',
    //   location: 'Mumbai, India',
    //   description: 'Joined a local developer meetup to discuss best practices and share knowledge.',
    //   image: '/assets/deloitte certificate_internship.png',
    //   photos: ['/assets/problem_solving_basic certificate-1.png', '/assets/deloitte certificate_internship.png']
    // }
  ];

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  viewPhotos(event: Event) {
    this.selectedEvent = event;
  }

  closeModal() {
    this.selectedEvent = null;
  }
}
