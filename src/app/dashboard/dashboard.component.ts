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
    this.message = 'this is a sample.';
  }

  ngOnInit(): void {
    console.log('test');
  }
}
