import { Module } from "@nestjs/common";
import { InMemoryBookRepository } from "./in-memory-book.repository";
import { InjectionToken } from "../application/inject.token";

@Module({
  providers: [
    {
      provide: InjectionToken.IN_MEMORY_BOOK_REPOSITORY,
      useClass: InMemoryBookRepository,
    },
  ],
  exports: [InjectionToken.IN_MEMORY_BOOK_REPOSITORY],
})
export class BookRepositoryModule {}
