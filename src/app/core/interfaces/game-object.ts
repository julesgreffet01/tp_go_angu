import {MoveObject} from './move-object';

export interface GameObject {
  winner: 'blanc' | 'noir' | 'egalite',
  caseNumber: 18 | 12 | 8,
}
