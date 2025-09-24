import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Book} from "../../interfaces/Book";
import {Observable} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookList: Observable<Book[]> = this.bookService.books$;

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.bookService.loadInitialBooks();
  }

  TrackBookById(index: number, book: Book): string {
    return book.id;
  }

  deleteBook(bookId: string): void {
    this.bookService.deleteBook(bookId).subscribe(response => {
    }, err => {
      console.log(err);
    })
  }
}
