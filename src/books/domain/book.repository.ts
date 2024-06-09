import { Book } from "./book.entity";

export interface BookRepository {
  newId: () => Promise<string>;
  save(book: Book): Promise<Book>;
  findById(id: number): Promise<Book>;
  findAll(): Promise<Book[]>;
  remove(id: number): Promise<void>;
}
