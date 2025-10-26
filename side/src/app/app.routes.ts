import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./landing/landing').then(m => m.Landing) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'work', loadComponent: () => import('./project/project').then(m => m.Project) },
  { path: 'skills', loadComponent: () => import('./skils/skils').then(m => m.Skils) },
  { path: 'achiev', loadComponent: () => import('./achiev/achiev').then(m => m.Achiev) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) }
];
