import { Module } from "@nestjs/common";
import { InjectionToken } from "../application/inject.token";
import { InMemoryBookRepository } from "./in-memory-book.repository";

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
