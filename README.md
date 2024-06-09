# Nest.js scratch

Nest.js 학습을 위한 프로젝트입니다.

## 메모

### 앱의 초기 구동시(bootstrap) 호출

의존성에서 필요로 하는 순서로 생성자를 호출함

- `AppModule`의 `providers` 생성자 호출(`AppService`)
- `AppModule`의 `imports` 생성자 호출(`BooksModule`)
- `BooksModule`의 `providers` 생성자 호출(`BooksService`)
- `Module`의 `providers`와 `imports`에 생성자 호출을 모두 끝낸 후 `Controller` 호출(`AppController`, `BooksController`)

### InjectionToken

주입에 사용하는 토큰을 상수로 선언해두면 환경에 따라 주입하는 객체를 변경할 수 있음. 생성자의 파라미터 타입으로 인터페이스를 전달하고, 주입은 프레임워크에서 해주는데, 이때 그 인터페이스에 해당하는 구현체가 무엇인지 프레임워크가 식별하기 위해서 토큰이 필요한 것으로 보인다.
