import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeneratorComponent } from './generator.component';

@NgModule({
  declarations: [
    GeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GeneratorComponent]
})
export class AppModule { }
