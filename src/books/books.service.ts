import { Inject, Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookRepository } from "./domain/book.repository";
import { InjectionToken } from "./application/inject.token";

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

  update(id: number, _: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
