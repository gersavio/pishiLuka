import { Color } from './../../interfaces/simon.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
})
export class SimonPage {

  private round:number = 0;
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private gameColours:string[] = [];
  private pushedColors:string[]= [];

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
      sound: '/assets/sounds/yellow.mp3',
    },
    {
      id: 2,
      name: 'red',
      active: false,
      sound: '/assets/sounds/red.mp3',
    },
    {
      id: 3,
      name: 'blue',
      active: false,
      sound: '/assets/sounds/blue.mp3',
    },
    {
      id: 4,
      name: 'green',
      active: false,
      sound: '/assets/sounds/green.mp3',
    },
  ];



start(){

}


  //Crear array con el orden de colores de la partida


  gameStart(){
    let nuevaLIsta = this.colors.sort(() => Math.random() -0.5)
    let firstColor = nuevaLIsta[0];



        console.log('COLOR START:::' , this.colors[0].name)



    if(firstColor.name === 'yellow'){
    this.yellow = true
    firstColor.active = true;

    setTimeout(() => {
      this.yellow = false;
    }, 2000);
  }

    if(firstColor.name === 'red'){
      this.red = true
      firstColor.active = true;

      setTimeout(() => {
        this.red = false;
      }, 2000);
    }

      if(firstColor.name === 'blue'){
        this.blue = true
        firstColor.active = true;

        setTimeout(() => {
          this.blue = false;
        }, 2000);
      }

        if(firstColor.name === 'green'){
          this.green = true
          firstColor.active = true;

          setTimeout(() => {
            this.green = false;
          }, 2000)
        }

     //Sonidos
    const gameSound = this.sounds[firstColor?.name];
    console.log(gameSound)
    if (firstColor.active === true) {
    gameSound.play();}


      this.gameColours.push(firstColor.name);
        if(this.gameColours.length === 5){
          this.gameColours = [];

          console.log('Juego Terminado')
        }
      console.log('NUEVO ARRAY', this.gameColours)


    }




 pushButton(id: string) {

  this.colors.find(c => c.name === id);
  this.pushedColors.push(id);
  this.round ++;

  if(this.round === 5){
    this.round = 0;
  }




  console.log(this.round)
  console.log('PushedColors:', this.pushedColors)








   }




 }

