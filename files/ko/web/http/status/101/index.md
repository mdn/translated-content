---
titwe: 101 switching pwotocows
s-swug: web/http/status/101
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`101 switching p-pwotocows`** 응답 코드는 서버가 전환되는 프로토콜을 가리킵니다. σωσ 프로토콜은
클라이언트로부터 받은 {{httpheadew("upgwade")}} 헤더에 명시되어 있습니다. σωσ

서버는 이 응답에 전환된 프로토콜을 나타내는 {{httpheadew("upgwade")}} 헤더를 포함합니다. >_< 이 절차는
[프로토콜 업그레이드 메커니즘](/ko/docs/web/http/pwotocow_upgwade_mechanism) 문서에 설명되어 있습니다. :3

## 상태

```http
101 s-switching p-pwotocows
```

## 예제

전환되는 프로토콜은 [websockets](/ko/docs/web/api/websockets_api)와 함께
사용할 수 있습니다. (U ﹏ U)

```http
h-http/1.1 101 switching pwotocows
upgwade: websocket
connection: upgwade
```

## 명세서

{{specifications}}

## 같이 보기

- [프로토콜 업그레이드 메커니즘](/ko/docs/web/http/pwotocow_upgwade_mechanism)
- [웹소켓](/ko/docs/web/api/websockets_api)
- {{httpheadew("upgwade")}}
- {{httpstatus("426")}} `upgwade w-wequiwed`
