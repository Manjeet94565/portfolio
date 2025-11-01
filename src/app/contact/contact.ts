import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  menuActive = false;

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  onSubmit() {
    // Handle form submission
    console.log('Contact form submitted:', this.contact);
    // Reset form
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
