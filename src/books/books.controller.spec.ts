import { Test, TestingModule } from "@nestjs/testing";
import { InjectionToken } from "./application/inject.token";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

describe("BooksController", () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: InjectionToken.BOOK_REPOSITORY,
          useValue: {
            newId: jest.fn(),
            save: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
