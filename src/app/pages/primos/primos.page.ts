import { Component} from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.page.html',
  styleUrls: ['./primos.page.scss'],
})
export class PrimosPage{

  playSound(primos: string): void {
     const sound = new Audio();
    sound.src = "assets/sounds/primos/" + primos + ".mp3";
    sound.play();
  }
}
