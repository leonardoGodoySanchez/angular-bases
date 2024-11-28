import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesnModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent, submodulos video 51
    // HeroeComponent,
    // ListComponent
  ],
  imports: [ 
    BrowserModule,
    CounterModule,
    HeroesnModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//module en import