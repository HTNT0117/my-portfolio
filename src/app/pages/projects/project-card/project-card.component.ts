import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  standalone: true,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: any; // Nhận dữ liệu dự án từ parent component
}
