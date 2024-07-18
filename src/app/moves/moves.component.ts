import {Component, SimpleChanges} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-moves',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './moves.component.html',
  styleUrl: './moves.component.scss'
})
export class MovesComponent {
  public moves = '';



}
