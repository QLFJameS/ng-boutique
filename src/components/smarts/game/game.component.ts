import { Component, contentChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonGreenComponent } from '../../dumbs/button-green/button-green.component';
import { ButtonRedComponent } from "../../dumbs/button-red/button-red.component";
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { InputFileComponent } from "../../dumbs/input-file/input-file.component";
import { CarouselComponent } from "../../dumbs/carousel/carousel.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterLink, ButtonGreenComponent, ButtonRedComponent, InputFileComponent, CarouselComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {


}
