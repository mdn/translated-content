---
title: 201 Created
slug: Web/HTTP/Status/201
---

{{HTTPSidebar}}

HTTP **`201 Created`** 는 요청이 성공적으로 처리되었으며, 자원이 생성되었음을 나타내는 성공 상태 응답 코드입니다.

응답이 반환되기 이전에 새로운 리소스가 생성되며, 응답 메시지 본문에 새로 만들어진 리소스 혹은 리소스에 대한 링크를 메시지 본문에 넣어 반환합니다. 그 위치는 요청 URL 또는 {{HTTPHeader("Location")}} 헤더의 내용입니다.

이 상태 코드의 일반적인 사용 사례는 {{HTTPMethod("POST")}} 요청에 대한 결과입니다.

## 상태

```
201 Created
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP request methods](/ko/docs/Web/HTTP/Methods)
