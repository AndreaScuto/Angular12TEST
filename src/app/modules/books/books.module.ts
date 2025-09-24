import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksRoutingModule} from './books-routing.module';
import {BooksComponent} from './books.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class BooksModule {
}
