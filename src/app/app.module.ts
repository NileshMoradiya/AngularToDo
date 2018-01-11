import { SizerComponent } from './sizer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent
    , SizerComponent, ListComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , MatInputModule
    , MatListModule
    , MatButtonModule
    , MatIconModule
    , MatChipsModule
    , MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
