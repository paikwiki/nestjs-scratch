import { HttpException, Inject, Injectable } from "@nestjs/common";
import { InjectionToken } from "./application/inject.token";
import { BookRepository } from "./domain/book.repository";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  constructor(
    @Inject(InjectionToken.BOOK_REPOSITORY)
    private readonly bookRepository: BookRepository,
  ) {}

  async create(dto: CreateBookDto) {
    const id = await this.bookRepository.newId();
    const book = await this.bookRepository.save({ id, ...dto });
    return book;
  }

  async findAll() {
    return await this.bookRepository.findAll();
  }

  async findOne(id: number) {
    return await this.bookRepository.findById(id);
  }

  async update(id: number, dto: UpdateBookDto) {
    const persisted = await this.bookRepository.findById(id);
    if (!persisted) throw new HttpException("Book not found", 404);

    return await this.bookRepository.save({ ...persisted, ...dto });
  }

  async remove(id: number) {
    const persisted = await this.bookRepository.findById(id);

    return persisted ? await this.bookRepository.remove(id) : null;
  }
}
