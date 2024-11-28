import { Component } from "@angular/core";

//tiene que ser parte de un module app.modul
@Component({
    selector: 'app-Counter', //nombre dle componente
    template:`
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increasyBy(1)"> + 1</button> <!--metodos y en el paréntesis se envian los parametros de la funcion-->
    <button (click)="resetBy()"> Reset</button>
    <button (click)="increasyBy(-1)"> - 1</button>

    
    `
})
export class CounterComponent
{
    public counter: number = 10;

    increasyBy(value : number): void //tipado de datos que recibe
    {
        this.counter += value;
    }

    resetBy( )
    {
        this.counter = 10;
    }
}