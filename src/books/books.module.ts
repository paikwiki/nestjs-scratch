import { Module } from "@nestjs/common";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { BookRepositoryModule } from "./infrastructure/book-repository.module";

@Module({
  imports: [BookRepositoryModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
