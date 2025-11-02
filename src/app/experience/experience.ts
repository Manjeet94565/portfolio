import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  image: string;
  photos: string[];
}

@Component({
  selector: 'app-experience',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  menuActive = true;
  selectedExperience: ExperienceItem | null = null;

  experiences: ExperienceItem[] = [
    {
      company: 'Deloitte',
      position: 'Intern',
      duration: '2024',
      location: 'Mumbai, India',
      description: 'Worked on various projects involving data analysis and business intelligence solutions.',
      technologies: ['Python', 'SQL', 'Tableau'],
      image: '/assets/deloitte certificate_internship.png',
      photos: ['/assets/deloitte certificate_internship.png']
    }
  ];

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  viewPhotos(experience: ExperienceItem) {
    this.selectedExperience = experience;
  }

  closeModal() {
    this.selectedExperience = null;
  }
}
