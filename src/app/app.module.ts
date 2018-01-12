import { SizerComponent } from './sizer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SkuhashPipe } from './skuhash.pipe';
import { SkuurlPipe } from './skuurl.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  declarations: [
    AppComponent
    , SizerComponent, ListComponent, SkuhashPipe, SkuurlPipe, FetchJsonPipe
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
    , HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
