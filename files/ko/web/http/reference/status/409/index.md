---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
original_slug: Web/HTTP/Status/409
---

HTTP **`409 Conflict`** 응답 상태 코드는 서버의 현재 상태와 요청이 충돌했음을 나타냅니다.

충돌은 {{HTTPMethod("PUT")}} 요청에 대응하여 발생할 가능성이 가장 높습니다. 예를 들어 서버에 이미 있는 파일보다 오래된 파일을
업로드하면 버전 제어 충돌이 발생하여 409 응답받을 수 있습니다.

## 상태

```http
409 Conflict
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPMethod("PUT")}}
