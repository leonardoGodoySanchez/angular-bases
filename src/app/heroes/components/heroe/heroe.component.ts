import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './heroe.component.html',
  // template:`
  //   <dd> {{heroName}} </dd>`,
  styleUrl: './heroe.component.css'
})
export class HeroeComponent 
{
  public heroName: string = "ironman";

  public heroAge: number = 19;

  get capitalizedName(): string // se ven como otras propiedades
  {
    return this.heroName.toUpperCase();
  }

  //junta el nombre y el age este método this. (aparecen los metodos en color distintos y se invocan con parentesis)

  getHeroDescription():string
  {
    return `${this.heroName} - ${this.heroAge}`;//forma para concatenar
  }

  //tarea crear dos metodos para cambiar nombre y edad pulsando el boton

  changeHero(): void
  {
    this.heroName = 'Spiderman';
  }

  changeAge(): void
  {
    this.heroAge = 25; 
  }

  resetForm(): void
  {
    this.heroName = "ironman";
    this.heroAge = 19;
  }
}
