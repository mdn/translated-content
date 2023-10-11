---
title: 멱등성
slug: Glossary/Idempotent
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

동일한 요청을 한 번 보내는 것과 여러 번 연속으로 보내는 것이 같은 효과를 지니고, 서버의 상태도 동일하게 남을 때, 해당 HTTP 메서드가 **멱등성**을 가졌다고 말합니다.

다른 말로는, 멱등성 메서드에는 통계기록 등을 제외하면 어떠한 부수효과(side effect)도 존재해서는 안됩니다. 예를 들어, 서버는 모든 요청을 받은 시간과 함께 기록할 수 있습니다. 멱등성(Idempotency)는 클라이언트가 의도한 효과에만 적용됩니다. 예를 들어, POST 요청은 데이터를 서버로 보내려고 하거나, DELETE 요청은 서버에서 리소스를 삭제하려고 합니다.

{{glossary("Safe/HTTP", "safe")}} 메서드는 {{HTTPMethod("PUT")}} and {{HTTPMethod("DELETE")}}와 마찬가지로 멱등적입니다. {{HTTPMethod("POST")}} 메서드는 멱등성이 아닙니다.

멱등성을 따질 땐 실제 서버의 백엔드 상태만 보면 되며, 각 요청에서 반환하는 응답 코드는 다를 수 있습니다. 첫 번째 {{HTTPMethod("DELETE")}} 요청이 {{HTTPStatus("200")}}을 반환한다면, 그 이후는 아마 {{HTTPStatus("404")}}를 반환할 것입니다. `DELETE`가 멱등성을 가진다는 것은, REST API에서 개발자는 `DELETE` 메서드를 사용해 "목록의 마지막 항목 제거" 기능을 구현해서는 안 된다는 것입니다.

다만, 서버는 메서드의 멱등성을 보장하지 않으며, 일부 애플리케이션은 잘못된 구현으로 멱등성 제약을 어길 수도 있습니다.

`GET /pageX HTTP/1.1`는 안전한(읽기 전용) 메서드이기 때문에 멱등성을 가집니다. 그 동안 서버의 데이터가 업데이트된 경우, 다음에 하는 호출은 클라이언트에 다른 데이터를 반환할 수 있습니다.

`POST /add_row HTTP/1.1`은 멱등성을 가지지 않습니다. 여러 번 호출되면 여러 행을 추가합니다.

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adds a 2nd row
POST /add_row HTTP/1.1   -> Adds a 3rd row
```

`DELETE /idX/delete HTTP/1.1`의 상태 코드는 응답마다 달라질 수 있지만, 그럼에도 멱등성을 가집니다.

```http
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

## 같이 보기

- HTTP 명세의 [멱등성](https://httpwg.org/specs/rfc9110.html#idempotent.methods) 정의
- 멱등성 메서드 문서: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- 비 멱등성 메서드 문서: {{HTTPMethod("POST")}},{{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
