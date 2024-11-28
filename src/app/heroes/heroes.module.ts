import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./components/heroe/heroe.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
    declarations:
    [
        HeroeComponent,
        ListComponent
    ],
    exports://es para todo lo que se queira exponer public
    [
        HeroeComponent,
        ListComponent
    ],
    imports:
    [
        CommonModule
    ]
})


export class HeroesnModule {}