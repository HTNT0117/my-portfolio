import { Routes } from '@angular/router';

import { HomeGreetingComponent } from './pages/home/home-greeting/home-greeting.component';
import { AboutPageComponent } from './pages/about/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page/projects-page.component';
import { CertificatesPageComponent } from './pages/certificates/certificates-page/certificates-page.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

export const routes: Routes = [
      { path: 'my-portfolio', component: HomeGreetingComponent }, 
      { path: 'my-portfolio/about', component: AboutPageComponent },
      { path: 'my-portfolio/projects', component: ProjectsPageComponent },
      { path: 'my-portfolio/certificates', component: CertificatesPageComponent },
      { path: 'my-portfolio/contact', component: ContactComponent },
]