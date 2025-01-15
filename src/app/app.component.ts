import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { DataService, Profile } from './services/data.service';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, JsonPipe, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = false;
  data: Profile[] = [];

  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isLoading = true;

    this.dataSubscription = this.dataService.fetchData().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.data = data;
      },
      error: () => {
        this.isLoading = false;
        this.data = [];
      },
    });
  }

  sortByAge() {
    this.data = [...this.data].sort((a, b) => a.age - b.age);
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  onDeleteCard(cardId: string) {
    this.data = this.data.filter(({ id }) => id !== cardId);
  }
}
