import { Component} from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage{
  timeout: any;
  double: boolean = false;

  playSound(color: string) {
    if(this.double === true) {
      clearTimeout(this.timeout);
      const sound = new Audio();
      sound.src = "assets/sounds/" + color + "" + color + ".mp3";
      sound.play();
      this.double = false;
    } else {
      this.timeout = setTimeout(() => {
        const sound = new Audio();
        sound.src = "assets/sounds/" + color + ".mp3";
        sound.play();
        this.double = false;
      }, 200);
      this.double = true;
    }
  }
}
