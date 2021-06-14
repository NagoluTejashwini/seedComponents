import { MyPipe } from './my-pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllSeedsComponent } from './all-seeds/all-seeds.component';

@NgModule({
  declarations: [
    AppComponent,
    AllSeedsComponent,
    MyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
