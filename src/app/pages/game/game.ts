import {Component, signal} from '@angular/core';
import {CaseObject} from '../../core/interfaces/case-object';
import {PionComponents} from '../../components/pion-components/pion-components';
import {PopupFinish} from '../../components/popup-finish/popup-finish';

@Component({
  selector: 'app-game',
  imports: [
    PionComponents,
    PopupFinish
  ],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {

  nbCases = signal<number>(8)
  tabAffichage  = signal<string[][]>([])
  tabInteraction = signal<CaseObject[][]>([])
  joueur = signal<boolean>(false)
  scorej1 = signal<number>(0)
  scorej2 = signal<number>(0)
  pass = 0
  gameFinished = signal<boolean>(false)

  constructor() {
    this.setAffichage();
    this.setInteraction();
  }

  setAffichage(){
    const tabAff: string[][] = []
    for (let i = 0; i < this.nbCases(); i++) {
      tabAff[i] = []
      for (let ii = 0; ii < this.nbCases(); ii++) {
        tabAff[i].push("")
      }
    }
    this.tabAffichage.set(tabAff);
  }

  setInteraction(){
    const tabInter: CaseObject[][] = []
    for (let i = 0; i < this.nbCases()+1; i++) {
      tabInter[i] = []
      for (let ii = 0; ii < this.nbCases()+1; ii++) {
        const uneCase: CaseObject = {
          pion: false,
          isClickable: true,
        };
        tabInter[i].push(uneCase);
      }
    }
    this.tabInteraction.set(tabInter);
  }

  putPion(indexParent: number, index: number) {
    if(this.joueur()){
      this.tabInteraction()[indexParent][index].pion = "blanc"
    } else {
      this.tabInteraction()[indexParent][index].pion = "noir"
    }
    this.tabInteraction()[indexParent][index].isClickable = false;
    this.joueur.set(!this.joueur());
    this.pass = 0
  }

  unsetPion(e: Event, indexParent: number, index: number) {
    e.preventDefault()
    if(this.tabInteraction()[indexParent][index].pion == "noir"){
      this.scorej1.set(this.scorej1() + 1)
    } else {
      this.scorej2.set(this.scorej2() + 1)
    }
    this.tabInteraction()[indexParent][index].pion = false
    this.tabInteraction()[indexParent][index].isClickable = true;
  }

  passAction(){
    this.pass += 1
    if(this.pass == 2){
      this.gameFinished.set(true)
    }
    this.joueur.set(!this.joueur())
  }

  closePupupFinish(){
    this.gameFinished.set(false)
    this.resetGame()
  }

  resetGame(){
    this.setAffichage()
    this.setInteraction()
    this.joueur.set(false)
    this.scorej1.set(0);
    this.scorej2.set(0);
    this.pass = 0
  }


}
