import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovesComponent } from "./moves/moves.component";
import { AssetsComponent } from "./assets/assets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovesComponent, AssetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ironsworn'.toUpperCase();


}
