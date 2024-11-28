import { CounterComponent } from "./components/counter/counter.component";
import { NgModule } from '@angular/core';


@NgModule({
    declarations: 
    [
        CounterComponent
    ],
    exports:
    [
        CounterComponent //para su uso publico
    ]
})
export class CounterModule {}

//decirle a angular que cpunter.mudole esta disponible
//ir a importarlo en app.module.ts