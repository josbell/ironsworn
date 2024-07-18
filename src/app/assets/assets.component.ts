import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {data} from "./data";

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {
  public assets = data;


}
