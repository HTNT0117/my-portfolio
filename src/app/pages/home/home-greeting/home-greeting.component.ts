import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-greeting',
  standalone: true,
  imports: [    
  ],
  templateUrl: './home-greeting.component.html',
  styleUrl: './home-greeting.component.css'
})
export class HomeGreetingComponent {
  constructor(private router: Router) {}
  goToAbout() {
    this.router.navigate(['/my-portfolio/about']);
  }

}
