---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Reference/Status/431
original_slug: Web/HTTP/Status/431
---

HTTP **`431 Request Header Fields Too Large`** 응답 코드는 [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers)의 크기가 너무 크기 때문에 처리가 불가능함을 알려준다. 요청 헤더의 크기를 줄인 후, 재요청을 할 수 있다.

431는 헤더 전체의 크기가 너무 크거나, 단일 헤더 필드가 너무 클 경우에 사용된다. 이 에러를 받는 유저를 위해 응답 body에 둘 중에 어느 경우인지 명시해줄 수 있다 — 이상적으로, 어느 헤더가 처리 불가능한지 알려주면 좋다. 그러면 쿠키를 삭제하는 것과 같이 유저가 문제를 해결할 수 있도록 도와준다.

서버가 431 상태 코드를 전송할 경우:

- {{ httpheader("Referer") }} URL이 너무 긴 경우
- 요청에 많은 양의 [Cookies](/ko/docs/Web/HTTP/Guides/Cookies) 포함된 경우

## Status

```
431 Request Header Fields Too Large
```

## 명세서

{{Specifications}}

## See also

- {{HTTPStatus(414, "414 URI Too Long")}}
- {{Glossary("Request header")}}
