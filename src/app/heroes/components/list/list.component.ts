import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

//arreglo para lista de heroes
  public heroeNames: string[] = 
  [
    "Spiderman",
    "Ironman",
    "She Hulk",
    "Thor"
  ];

  public deletedHero?: string;

  removeLastHeroe():void
  {
    this.deletedHero = this.heroeNames.pop();
    // console.log(deletedHero);
  }
}
