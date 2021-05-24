import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { Shared3Service } from './tree-shakeable-providers/shared3.service';
import { TableColResizeComponent} from './table-col-resize/table-col-resize.component';

@NgModule({
  declarations: [
    AppComponent,
    TableColResizeComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [Shared3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
