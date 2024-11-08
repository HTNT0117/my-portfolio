import { Component } from '@angular/core';

import { LandingSectionComponent } from '../landing-section/landing-section.component';
import { ResumeComponent } from '../resume/resume.component';
@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
            LandingSectionComponent,
            ResumeComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
