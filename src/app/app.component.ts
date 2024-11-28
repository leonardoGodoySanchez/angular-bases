import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
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

