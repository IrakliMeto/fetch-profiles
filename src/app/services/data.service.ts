import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Profile {
  fullName: string;
  age: number;
  imageSrc: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  fetchData(): Observable<Profile[]> {
    return of([
      {
        fullName: 'John Doe',
        age: 27,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'Jane Jurs',
        age: 35,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'Albert karo',
        age: 70,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'John Malkovich',
        age: 33,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'Irakli Meto',
        age: 28,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'Zigmund froidi',
        age: 99,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'guram bagdoshvili',
        age: 64,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        fullName: 'jemal kakauridze',
        age: 54,
        imageSrc: 'https://picsum.photos/200/200',
      },
    ]).pipe(delay(1500));
  }
}
