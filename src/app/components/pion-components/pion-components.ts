import {Component, input} from '@angular/core';

@Component({
  selector: 'app-pion-components',
  imports: [],
  templateUrl: './pion-components.html',
  styleUrl: './pion-components.css',
})
export class PionComponents {
  color = input('black');
}
