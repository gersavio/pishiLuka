import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  public spanish:boolean = true;


  constructor() { }

  ngOnInit() {

  }


  playSpanishSound(numeros: string): void {

        const sound = new Audio();
        sound.src = "assets/sounds/numeros/" + numeros + ".mp3";
        sound.play();

      }


  playEnglishSound(numeros: string): void {

    const sound = new Audio();
    sound.src = "assets/sounds/ingles_numeros/" + numeros + ".mp3";
    sound.play();



  }

  playSelectedLenguage(numeros: string): void {
    if (this.spanish) {
        this.playSpanishSound(numeros);
    } else {
        this.playEnglishSound(numeros);
    }
}







    cambiodIdomaIngles(){
     this.spanish = false;
     console.log('INGLES')
      }


    cambioIdomaspanish(){
     this.spanish = true;
     console.log('ESPAÑOLLLLL')
    }



}
