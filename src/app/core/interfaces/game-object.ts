import {MoveObject} from './move-object';

export interface GameObject {
  scorePlayer1: number,
  scorePlayer2: number,
  currentPlayer: boolean,
  caseNumber: 19 | 13 | 9,
  history: MoveObject[]
}
