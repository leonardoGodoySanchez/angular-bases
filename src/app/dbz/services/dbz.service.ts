import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; //libreria para crear id genericamente automaticos, v4 son funciones

//decorador@injectable 
@Injectable({
    providedIn: 'root' 
}) 

//se va a dejar la logica de main-page-component.ts  y se importan como dependencias 
export class DbzService 
{
    public character: Character [] = 
    [
        {
            id: uuid(),
            name: 'krillin', 
            power: 1000
        },
        {
            id: uuid(),
            name:'goku',
            power: 9500
        },
        {
            id: uuid(),
            name:'vegeta',
            power:7500
        }
    ];

    addCharacter( character: Character): void 
    {
        const newCharacter : Character = 
        {
            id:uuid(), ...character
            //forma comentada reemplazada por una sola linea
            // id:uuid(),
            // name: character.name,
            // power: character.power
        };

        this.character.push(newCharacter); //añade al final del arreglo
    }

    // deleteCharacterById( index:number)
    // {
    //     this.character.splice(index, 1); //metodo que se utilizara para borrar del listado, recibe el inde que se emite del list_component.
    // }

    deleteCharacterById( id:string)
    { //                              FILTER BARRE CADA ELEMENTO DEL ARREGLO Y VA  AMOSTRAR SEGUN EL FILTRO
        this.character = this.character.filter(character => character.id !== id);
    }
    
}