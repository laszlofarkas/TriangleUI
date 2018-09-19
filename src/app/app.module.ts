import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TriangleModule } from './triangle/triangle.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TriangleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
