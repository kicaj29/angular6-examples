import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { Shared3Service } from './tree-shakeable-providers/shared3.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [Shared3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
