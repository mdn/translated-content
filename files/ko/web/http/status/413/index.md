---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`413 Content Too Large`** 응답 상태 코드는 요청 엔터티가 서버에 의해 정의된 제한보다 크다는 것을 나타냅니다. 서버는 연결을 닫거나 {{HTTPHeader("Retry-After")}} 헤더 필드를 반환할 수 있습니다.

RFC 9110 이전에는 이 상태 코드 이름이 **`Payload Too Large`** 였습니다. 이 이름은 아직도 널리 사용되고 있습니다.

## 상태

```http
413 Content Too Large
```

## 명세서

{{Specifications}}

## 같이 보기

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
