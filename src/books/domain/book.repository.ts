import { Book } from "./book.entity";

export interface BookRepository {
  newId: () => Promise<number>;
  save(book: Book): Promise<Book>;
  findById(id: number): Promise<Book | null>;
  findAll(): Promise<Book[]>;
  remove(id: number): Promise<number | null>;
}
