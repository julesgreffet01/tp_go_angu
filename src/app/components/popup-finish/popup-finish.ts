import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-popup-finish',
  imports: [],
  templateUrl: './popup-finish.html',
  styleUrl: './popup-finish.css',
})
export class PopupFinish {

  joueurWin = input<"1" | "2" | "3">()
  gameFinish = output<boolean>()
  closePopup() {
    this.gameFinish.emit(false);
  }
}
