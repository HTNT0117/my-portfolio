import { Routes } from '@angular/router';

import { HomeGreetingComponent } from './pages/home/home-greeting/home-greeting.component';
import { AboutPageComponent } from './pages/about/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page/projects-page.component';
import { CertificatesPageComponent } from './pages/certificates/certificates-page/certificates-page.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

export const routes: Routes = [
      { path: 'ngtram-portfolio', component: HomeGreetingComponent }, 
      { path: 'ngtram-portfolio/about', component: AboutPageComponent },
      { path: 'ngtram-portfolio/projects', component: ProjectsPageComponent },
      { path: 'ngtram-portfolio/certificates', component: CertificatesPageComponent },
      { path: 'ngtram-portfolio/contact', component: ContactComponent },
]