import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'This is a sample of Angular application.';
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
