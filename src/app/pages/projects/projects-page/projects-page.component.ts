import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent], // Đảm bảo không có dấu phẩy thừa
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projects = [
    {
      title: 'AIoT Lab VN',
      technology: 'Technology: ReactJS, TailwindCSS',
      description: 'Developed the front-end for various pages of the AIoT Lab landing page, including implementing user interfaces and updating designs as needed to enhance user experience and functionality.',
      imageUrl: '/assets/AIoTLab.png', // Đường dẫn đến hình ảnh dự án
      link: 'https://aiotlab.vn/' // Đường dẫn đến dự án
    },
    {
      title: 'EVALLOS',
      technology: 'Technology: ReactJS, ShadCN',
      description: 'An platform for evaluating students learning outcomes in university. My contribution is developed front-end for various page of this project.',
      imageUrl: '/assets/evallos.png', // Đường dẫn đến hình ảnh dự án
      link: 'https://evallos.aiotlab.io.vn/' // Đường dẫn đến dự án
    },
    {
      title: 'Social Media - Sugar Cube',
      technology: 'Technology: ReactJS, TailwindCSS, NodeJS, MongoDB',
      description: 'Developed a social media platform, allowing users to share images, message friends, and connect with others. My contributions included designing the UI in Figma, full-stack development handling both backend and frontend, and leading the project team.',
      imageUrl: '/assets/sugar-cube.png', // Đường dẫn đến hình ảnh dự án
      link: 'https://social-media-site-rosy.vercel.app/login' // Đường dẫn đến dự án
    },
    {
      title: 'Cardealer Website',
      technology: 'Technology: Angular, .Net, PostgreSQL',
      description: 'Developed a car dealership website that allows users to view and manage vehicles, as well as schedule test drives or purchase cars. This project was part of my internship. I was handling both frontend and backend development independently, providing valuable into full-stack development.',
      imageUrl: '/assets/Cardealer.png', // Đường dẫn đến hình ảnh dự án
      link: 'https://link-to-your-project2.com' // Đường dẫn đến dự án
    },
    {
      title: 'Chess game',
      technology: 'Technology: Java',
      description: 'A Algorithms & Data Structures to develop a computer chess game base on the rule of a normal chess game.',
      imageUrl: 'assets/chessgame.png', // Đường dẫn đến hình ảnh dự án
      link: 'github.com/nguyenhuybao1108/dsaProject2023' // Đường dẫn đến dự án
    },
    {
      title: 'Inventory Management System',
      technology: 'Technology: ReactJS, Node.js',
      description: 'A Software Engineering project, develop a website to keep track the product in a inventory. My contribution is developed front-end.',
      imageUrl: 'assets/InventMana.png', // Đường dẫn đến hình ảnh dự án
      link: 'https://iventory-management.vercel.app/?_vercel_share=Jpn4X3q4Fyhd4Y9NWvqmI1zFlOJYjmMU&fbclid=IwZXh0bgNhZW0CMTAAAR2fPTasJdAbvd4k7mSCZyl_pKepqx2C57Ba7rSWkLj3gm7R52h5hyWuUoQ_aem_Ad9PITwaK-uYD-_P-6e0y3vV7XZMpul3PwIF4now4TgCBQpELoCBOPPTYk02XwcLrqBelYJ8VQb24jPo-yNUixQw' // Đường dẫn đến dự án
    },
    {
      title: 'Emotion Classification for Home LLM',
      technology: 'Technology: python, CNN',
      description: 'Conducted research on emotion analysis for HomeLLM, applying deep learning techniques to classify user sentiments from textual data, enhancing AI responsiveness and intelligence.',
      imageUrl: 'assets/noimag.png', // Đường dẫn đến hình ảnh dự án
      link: '' // Đường dẫn đến dự án
    }
  ];
}
