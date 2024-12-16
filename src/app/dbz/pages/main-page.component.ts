import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page', //se elimina el app- que se antepone para llamar a los módulos  
    templateUrl: './main-page.component.html'
})

export class MainPageComponent 
{           //dejarlo privado par ano exponer los datos
    constructor (private dbzService : DbzService) //injeccion de dependecias
    {

    }

    get characters(): Character[]
    {
        return[...this.dbzService.character];
    }

    onDeleteCharacter(id: string): void 
    {
        this.dbzService.deleteCharacterById(id);
    }

    onNewcharacter( character: Character)
    {
        this.dbzService.addCharacter( character);
    }
}