import { Component } from '@angular/core';
import { People } from 'src/app/interfaces/memo.interface';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.page.html',
  styleUrls: ['./memo.page.scss'],
})
export class MemoPage {
  firstCardSound: HTMLAudioElement;
  hitSound: HTMLAudioElement;
  failSound: HTMLAudioElement;
  endSound: HTMLAudioElement;

  constructor() {
    this.firstCardSound = new Audio();
    this.firstCardSound.src = 'assets/sounds/memo/first.mp3';

    this.hitSound = new Audio();
    this.hitSound.src = 'assets/sounds/memo/second.mp3';

    this.failSound = new Audio();
    this.failSound.src = 'assets/sounds/memo/fail.mp3';

    this.endSound = new Audio();
    this.endSound.src = 'assets/sounds/memo/end.mp3';

    this.shuffleCards();
  }

  cards: People[] = [
    {
      id: 1,
      value: 'dylan',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/dylan.jpg',
      num_img: 'assets/backgrounds/numeros/uno.png',
    },
    {
      id: 2,
      value: 'dylan',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/dylan.jpg',
      num_img: 'assets/backgrounds/numeros/uno.png',
    },
    {
      id: 3,
      value: 'fran',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/fran.jpg',
      num_img: 'assets/backgrounds/numeros/dos.png',
    },
    {
      id: 4,
      value: 'fran',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/fran.jpg',
      num_img: 'assets/backgrounds/numeros/dos.png',
    },
    {
      id: 5,
      value: 'milan',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/milan.jpg',
      num_img: 'assets/backgrounds/numeros/tres.png',
    },
    {
      id: 6,
      value: 'milan',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/milan.jpg',
      num_img: 'assets/backgrounds/numeros/tres.png',
    },
    {
      id: 7,
      value: 'pepe',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/pepe.jpg',
      num_img: 'assets/backgrounds/numeros/cuatro.png',
    },
    {
      id: 8,
      value: 'pepe',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/pepe.jpg',
      num_img: 'assets/backgrounds/numeros/cuatro.png',
    },
    {
      id: 9,
      value: 'hugo',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/hugo.jpg',
      num_img: 'assets/backgrounds/numeros/cinco.png',
    },
    {
      id: 10,
      value: 'hugo',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/hugo.jpg',
      num_img: 'assets/backgrounds/numeros/cinco.png',
    },
    {
      id: 11,
      value: 'andrea',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/andrea.jpg',
      num_img: 'assets/backgrounds/numeros/seis.png',
    },
    {
      id: 12,
      value: 'andrea',
      flipped: false,
      selected: false,
      img: 'assets/backgrounds/primos/andrea.jpg',
      num_img: 'assets/backgrounds/numeros/seis.png',
    },
  ];

  public selectedCard: People[] = [];
  public wins: number = 0;
  public numbers: boolean = false;

  shuffleCards(): People[] {
    this.cards.sort(() => Math.random() - 0.5);
    return this.cards;
  }
//Botones
  cambioNumeros() {
    if(this.selectedCard.length > 0){
    this.numbers = true;
    this.shuffleCards();
    this.flipAllCards();
    }
  }

  cambioFotos() {
    if(this.selectedCard.length > 0){
      this.numbers = false;
      this.shuffleCards();
      this.flipAllCards();
      }
  }

  //girar cartas
  flipCard(card: People): void {
    card.selected = true;

    if (!card.flipped && this.selectedCard.length < 2) {
      card.flipped = true;
      this.selectedCard.push(card);
    }

    if (this.selectedCard.length === 2) {
      this.checkerCouples(card);
    }
    if (this.selectedCard.length < 2) {
      this.firstCardSound.play();
    }
  }

  //Comparar cartas
  checkerCouples(card: People): void {
    if (this.selectedCard[0].value != this.selectedCard[1].value) {
      this.failSound.play();

      setTimeout(() => {
        this.selectedCard.forEach((card) => (card.flipped = false));
        this.selectedCard = [];
      }, 1000);
    }

    if (this.selectedCard[0].value === this.selectedCard[1].value) {
      this.hitSound.play();
      this.selectedCard = [];
      this.wins++;

      //Al ganar
      if (this.wins === this.cards.length / 2) {
        this.endSound.play();

        setTimeout(() => {
          this.shuffleCards();
          this.flipAllCards();
        }, 2000);
      }
    }
  }

//Reset
  flipAllCards(): void {
    this.cards.forEach((card) => (card.flipped = false));
  }

  reset(){
    this.shuffleCards();
    this.flipAllCards();
  }
}
