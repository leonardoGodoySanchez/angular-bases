import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input() //propiedad para cambiar e ir al main.page
  public characterList: Character [] =
  [
    {
      name: 'trunks',
      power: 10
    }
  ]

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter(); //indice emitir índice 
  /**
   * metodo para emitir y enviar datos al padre 
   */


  deleteCharacterById(id?: string): void
  { // TODO: EMITIR ID DEL PERSONAJE RECIBIR EL INDEX E IMPRIIRLO
    // console.log({index});

    if (!id) return;

    this.onDeleteId.emit( id); //lo que se emite del metodo tiene que ser los valores declarados, se enviar
  }
}
