import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "../interfaces/Book";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = "http://localhost:3000/books";
  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  loadInitialBooks(): void {
    this.http.get<Book[]>(this.url).subscribe(result => {
      this.booksSubject.next(result);
    })
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap(() => {
        this.booksSubject.next(this.booksSubject.getValue().filter((book: Book) => book.id !== id));
      })
    );
  }
}


