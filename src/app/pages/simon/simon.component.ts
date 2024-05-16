import { Color } from './../../interfaces/simon.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
})
export class SimonPage implements OnInit {

 public round:number = 0;
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private gameColours:string[] = [];

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

  colors: Color[] = [
    {
      id: 1,
      name: 'yellow',
      active: false,
      sound: '/assets/sounds/Amarillo.mp3',
    },
    {
      id: 2,
      name: 'red',
      active: false,
      sound: '/assets/sounds/Rojo.mp3',
    },
    {
      id: 3,
      name: 'blue',
      active: false,
      sound: '/assets/sounds/Azul.mp3',
    },
    {
      id: 4,
      name: 'green',
      active: false,
      sound: '/assets/sounds/Verde.mp3',
    },
  ];

  ngOnInit(){
    this.gameStart();
  }


  //Crear array con el orden de colores de la partida
  suflleColors(colors: Color[]){
   let nuevaLIsta = this.colors.sort(() => Math.random() -0.5)

   console.log('orden colores barajados',nuevaLIsta)
   return nuevaLIsta
     }





  gameStart(){
    this.suflleColors([]);



    console.log('EL juego comienza')

    let firstColor = this.colors[0];
    console.log('COLOR START:::' , this.colors[0].name)

    firstColor.active = true;

    const gameSound = this.sounds[firstColor?.name];
    console.log(gameSound)
    if (firstColor.active = true) {

      gameSound.play();}



    setTimeout(() => {
      firstColor.active = false;
      console.log('apago el color' , firstColor.name)

    }, 2000);


    console.log('color random', firstColor)

  }




 pushButton(id: number) {
   //Cambiar a true active

   //this.suflleColors();
   this.round ++;


  //  const selectedColor = this.colors.find(
  //     (selectedColor) => selectedColor.id === id
  //     );

  //     if (selectedColor) {
  //       selectedColor.active = true;
  //       setTimeout(() => {
  //       selectedColor.active = false;
  //     }, 1000);

  //     //Completar ronda
  //     if(this.round >= this.colors.length){
  //       console.log('game Over')

  //     };

  //     //Reproducir sonido
  //     console.log('Sonido Reproduciendose')
  //     const sound = this.sounds[selectedColor?.name];
  //     if (sound) {
    //       sound.play();


   // console.log('Ronda :' ,this.round)
    //console.log('Color :' ,selectedColor?.name)


  //        }
  //     }
   }

 }

