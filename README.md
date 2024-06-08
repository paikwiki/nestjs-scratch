# Nest.js scratch

Nest.js 학습을 위한 프로젝트입니다.

## 메모

### 앱의 초기 구동시(bootstrap) 호출

의존성에서 필요로 하는 순서로 생성자를 호출함

- `AppModule`의 `providers` 생성자 호출(`AppService`)
- `AppModule`의 `imports` 생성자 호출(`BooksModule`)
- `BooksModule`의 `providers` 생성자 호출(`BooksService`)
- `Module`의 `providers`와 `imports`에 생성자 호출을 모두 끝낸 후 `Controller` 호출(`AppController`, `BooksController`)
