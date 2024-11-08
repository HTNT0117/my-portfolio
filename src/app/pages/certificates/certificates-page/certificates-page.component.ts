import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.css'
})
export class CertificatesPageComponent {
  certificates = [
    {
      title: 'EF SET Certificate - Level B2',
      imageUrl: 'assets/Udemy_JS.png' // Đường dẫn tới hình ảnh chứng chỉ
    },
    {
      title: 'EF SET Certificate - Level B2',
      imageUrl: 'assets/Udemy_SQL.png' // Đường dẫn tới hình ảnh chứng chỉ
    },
    {
      title: 'EF SET Certificate - Level B2',
      imageUrl: 'assets/SolanaHack.png' // Đường dẫn tới hình ảnh chứng chỉ
    },
  ];
}
