import { Test, TestingModule } from "@nestjs/testing";
import { InjectionToken } from "./application/inject.token";
import { BooksService } from "./books.service";
import { BookRepository } from "./domain/book.repository";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

describe("BooksService", () => {
  let service: BooksService;
  let bookRepository: BookRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<BooksService>(BooksService);
    bookRepository = module.get<BookRepository>(InjectionToken.BOOK_REPOSITORY);
  });

  describe("create()", () => {
    it("새 책을 생성할 수 있다.", async () => {
      const dto: CreateBookDto = { title: "Test Book" };
      const id = 1;

      (bookRepository.newId as jest.Mock).mockResolvedValue(id);
      (bookRepository.save as jest.Mock).mockResolvedValue({ id, ...dto });

      const result = await service.create(dto);

      expect(bookRepository.newId).toHaveBeenCalled();
      expect(bookRepository.save).toHaveBeenCalledWith({ id, ...dto });
      expect(result).toEqual({ id, ...dto });
    });
  });

  describe("findAll()", () => {
    it("저장한 모든 책을 조회할 수 있다.", async () => {
      const books = [{ id: 1, title: "Test Book" }];
      (bookRepository.findAll as jest.Mock).mockResolvedValue(books);

      const result = await service.findAll();

      expect(bookRepository.findAll).toHaveBeenCalled();
      expect(result).toEqual(books);
    });
  });

  describe("findOne()", () => {
    it("아이디에 해당하는 책을 조회할 수 있다.", async () => {
      const book = { id: 1, title: "Test Book" };
      (bookRepository.findById as jest.Mock).mockResolvedValue(book);

      const result = await service.findOne(1);

      expect(bookRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toEqual(book);
    });
  });

  describe("update()", () => {
    it("책을 업데이트할 수 있다.", async () => {
      const id = 1;
      const dto: UpdateBookDto = {
        title: "Updated Book",
      };

      (bookRepository.findById as jest.Mock).mockResolvedValue({
        id,
        title: "dummy",
      });
      (bookRepository.save as jest.Mock).mockResolvedValue({
        id,
        ...dto,
      });

      const result = await service.update(id, dto);

      expect(result).toStrictEqual({ id, ...dto });
    });
  });

  describe("remove()", () => {
    it("책을 삭제할 수 있다.", async () => {
      const id = 1;

      (bookRepository.findById as jest.Mock).mockResolvedValue({
        id,
        title: "dummy",
      });
      (bookRepository.remove as jest.Mock).mockResolvedValue(id);

      const result = await service.remove(1);

      expect(result).toBe(id);
    });

    it("책을 삭제할 책이 없을 경우 null을 반환한다.", async () => {
      const id = 2;

      (bookRepository.findById as jest.Mock).mockResolvedValue(null);
      (bookRepository.remove as jest.Mock).mockResolvedValue(id);

      const result = await service.remove(1);

      expect(result).toBeNull();
    });
  });
});
