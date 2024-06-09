import { Book } from "../domain/book.entity";
import { BookRepository } from "../domain/book.repository";

export class InMemoryBookRepository implements BookRepository {
  private books: Book[] = [];
  private nextId = 1;

  async newId(): Promise<number> {
    return this.nextId++;
  }

  async save(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async findById(id: number): Promise<Book | null> {
    return this.books.find((book) => book.id === id) ?? null;
  }

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async remove(id: number): Promise<number | null> {
    const currentBooksCount = this.books.length;
    this.books = this.books.filter((book) => book.id !== id);

    return this.books.length !== currentBooksCount ? id : null;
  }
}
