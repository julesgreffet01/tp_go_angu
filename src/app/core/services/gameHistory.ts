import { Injectable } from '@angular/core';
import {GameObject} from '../interfaces/game-object';

@Injectable({
  providedIn: 'root',
})
export class GameHistory {

  getAll(): GameObject[] {
    const history = localStorage.getItem('history');
    return history ? JSON.parse(history) : [];
  }

  update(history: GameObject[]): void {
    localStorage.setItem('history', JSON.stringify(history));
  }

}
