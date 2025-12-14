import { Routes } from '@angular/router';
import {Game} from './pages/game/game';
import {Layout} from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Game
      },
      {
        path: 'history',
        component: History
      }
    ]
  }
];
