import { Color } from './../../interfaces/simon.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
})
export class SimonPage {
  private round: number = 0;
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private gameColours: string[] = [];
  private pushedColors: string[] = [];
  private gameSrcList:string[] = [];

  constructor() {
    this.preloadSounds();
  }

  // Cargar sonidos
  private preloadSounds() {
    this.colors.forEach((color) => {
      const sound = new Audio(color.sound);
      sound.load();
      this.sounds[color.name] = sound;
    });
  }

  yellow = false;
  red = false;
  blue = false;
  green = false;

  colors: Color[] = [
    {
      id: 1,
      name: 'yellow',
      active: false,
      sound: 'assets/sounds/yellow.mp3',
    },
    {
      id: 2,
      name: 'red',
      active: false,
      sound: 'assets/sounds/red.mp3',
    },
    {
      id: 3,
      name: 'blue',
      active: false,
      sound: 'assets/sounds/blue.mp3',
    },
    {
      id: 4,
      name: 'green',
      active: false,
      sound: 'assets/sounds/green.mp3',
    },
  ];


  start(){
  }



  //Crear array con el orden de colores de la partida

  gameStart() {
    let nuevaLIsta = this.colors.sort(() => Math.random() - 0.5);
    let firstColor = nuevaLIsta[0];

    console.log('COLOR START:::', this.colors[0].name);

    switch (firstColor.name) {
      case 'yellow':
        this.yellow = true;
        firstColor.active = true;

        setTimeout(() => {
          this.yellow = false;
        }, 2000);
        break;

      case 'red':
        this.red = true;
        firstColor.active = true;

        setTimeout(() => {
          this.red = false;
        }, 2000);
        break;

      case 'blue':
        this.blue = true;
        firstColor.active = true;

        setTimeout(() => {
          this.blue = false;
          }, 2000);
          break;

      case 'green':
        this.green = true;
        firstColor.active = true;

        setTimeout(() => {
          this.green = false;
          }, 2000);
          break;
    }

        // Sonidos
        const gameSound = this.sounds[firstColor?.name];
        console.log('gameSound',gameSound);
        let arraySonidos = [];
        if (firstColor.active === true) {
          gameSound.play();
        }

        arraySonidos.push(gameSound)
        console.log('ArraySonidos', arraySonidos)






     this.gameColours.push(firstColor.name);
     if (this.gameColours.length === 5) {
       this.gameColours = [];
       this.gameSrcList = [];
        }
             console.log('COLORES MÁQUINA', this.gameColours);



    this.gameSrcList.push(firstColor.sound);

    console.log('GAMESRCLIST', this.gameSrcList)

  }



  pushButton(id: string) {
    this.colors.find((c) => c.name === id);
    this.pushedColors.push(id);
    this.round++;

    if(this.pushedColors === this.gameColours){
      console.log('ACIERTO');

    }





    if (this.round === 5) {
      this.round = 0;
    }

    console.log(this.round);
    console.log('COLORES PULSADOS:', this.pushedColors);
    if(this.pushedColors.length === this.gameColours.length ){
      this.pushedColors = [];
    }

  }
}








