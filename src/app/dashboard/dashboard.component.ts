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
    this.message = 'ダッシュボードにmessageを出力';
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
