import { Inject, Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookRepository } from "./domain/book.repository";
import { InjectionToken } from "./application/inject.token";

@Injectable()
export class BooksService {
  constructor(
    @Inject(InjectionToken.IN_MEMORY_BOOK_REPOSITORY)
    private readonly booksRepository: BookRepository,
  ) {}

  async create(dto: CreateBookDto) {
    const id = await this.booksRepository.newId();
    const book = await this.booksRepository.save({ id, ...dto });
    return book;
  }

  async findAll() {
    return await this.booksRepository.findAll();
  }

  async findOne(id: number) {
    return await this.booksRepository.findById(id);
  }

  update(id: number, _: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
