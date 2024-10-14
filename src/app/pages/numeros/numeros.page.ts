import { Component} from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage{
  public lenguage: string = 'spanish';
  selectlenguage: HTMLAudioElement;

  constructor() {
    this.selectlenguage = new Audio();
    this.selectlenguage.src = 'assets/sounds/memo/first.mp3';
  }

  cambiodIdomaIngles() {
    this.lenguage = 'english';
    this.selectlenguage.play();

  }
  cambioIdomaspanish() {
    this.lenguage = 'spanish';
    this.selectlenguage.play();
  }
  cambioIdomachino() {
    this.lenguage = 'chinese';
    this.selectlenguage.play();
  }

  playSelectedLenguage(numeros: string): void {
    switch (this.lenguage) {
      case 'spanish':
        this.playSpanishSound(numeros);
        break;
      case 'english':
        this.playEnglishSound(numeros);
        break;
      case 'chinese':
        this.playChineseSound(numeros);
        break;
    }
  }

  playSpanishSound(numeros: string): void {
    const sound = new Audio();
    sound.src = 'assets/sounds/numeros/' + numeros + '.mp3';
    sound.play();
  }

  playEnglishSound(numeros: string): void {
    const sound = new Audio();
    sound.src = 'assets/sounds/ingles_numeros/' + numeros + '.mp3';
    sound.play();
  }

  playChineseSound(numeros: string): void {
    const sound = new Audio();
    sound.src = 'assets/sounds/numeroschinos/' + numeros + '.mp3';
    sound.play();
  }
}
