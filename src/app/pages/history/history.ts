import {Component, inject, signal} from '@angular/core';
import {GameHistory} from '../../core/services/gameHistory';
import {GameObject} from '../../core/interfaces/game-object';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

  public gameHistoryService = inject(GameHistory)

  public history = signal<GameObject[]>([])

  constructor() {
    this.history.set(this.gameHistoryService.getAll());
  }

}
