import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Profile {
  id: string;
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
        id: '1',
        fullName: 'John Doe',
        age: 27,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '2',
        fullName: 'Jane Jurs',
        age: 35,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '3',
        fullName: 'Albert karo',
        age: 70,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '4',
        fullName: 'John Malkovich',
        age: 33,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '5',
        fullName: 'Irakli Meto',
        age: 28,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '6',
        fullName: 'Zigmund froidi',
        age: 99,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '7',
        fullName: 'guram bagdoshvili',
        age: 64,
        imageSrc: 'https://picsum.photos/200/200',
      },
      {
        id: '8',
        fullName: 'jemal kakauridze',
        age: 54,
        imageSrc: 'https://picsum.photos/200/200',
      },
    ]).pipe(delay(1500));
  }
}
