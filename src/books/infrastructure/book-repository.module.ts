import { Module } from "@nestjs/common";
import { InMemoryBookRepository } from "./in-memory-book.repository";
import { InjectionToken } from "../application/inject.token";

@Module({
  providers: [
    {
      provide: InjectionToken.BOOK_REPOSITORY,
      useClass: InMemoryBookRepository,
    },
  ],
  exports: [InjectionToken.BOOK_REPOSITORY],
})
export class BookRepositoryModule {}
