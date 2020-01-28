import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { TypeAheadComponent } from './type-ahead/typeahead.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule
} from "@angular/material";

@NgModule({
  imports:[ 
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule, 
    MatInputModule
    ],
  declarations: [ AppComponent, TypeAheadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
