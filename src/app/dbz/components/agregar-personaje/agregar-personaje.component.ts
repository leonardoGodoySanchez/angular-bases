import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css'
})

export class AgregarPersonajeComponent 
{

  @Output()           //emite muchos valires lo que uno necesite enviar
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = 
  {
    name: '',
    power: 0
  };

  emitCharacter(): void
  {
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: "", power: 0};
    
    /* la cambiamos por la declaracion de arriba para tener las declaraciones en una sola linea de código
    this.character.name = '';
    this.character.power = 0;
    */
  }
}
