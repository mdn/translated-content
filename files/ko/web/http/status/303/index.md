---
title: 303 See Other
slug: Web/HTTP/Status/303
---

{{HTTPSidebar}}

HTTP(HyperText Transfer Protocol) **`303 See Other`** 리디렉션 상태 응답 코드는 리디렉션이 요청한
리소스 자체에 연결되지 않고 다른 페이지(예: 확인 페이지, 실제 개체 표시([HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14) 참조) 또는 업로드 진행률 페이지)에 연결됨을 나타냅니다.
이 응답 코드는 {{HTTPMethod("PUT")}} 또는 {{HTTPMethod("POST")}}의 결과로 다시 전송되는 경우가 많습니다.
이 리디렉션 페이지를 표시하는 데 사용되는 방법은 항상 {{HTTPMethod("GET")}}입니다.

## 상태

```http
303 See Other
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPStatus("302", "302 Found")}}, a temporary redirect
- {{HTTPStatus("307", "307 Temporary Redirect")}}, 사용된 메서드가 절대 변경되지 않는 이
  상태 코드와 동일합니다.
