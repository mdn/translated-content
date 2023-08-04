---
title: 200 OK
slug: Web/HTTP/Status/200
---

{{HTTPSidebar}}

HTTP **`200 OK`** 는 요청이 성공했음을 나타내는 성공 응답 상태 코드입니다. 200 응답은 기본적으로 캐시 가능합니다.

성공의 의미는 다음과 같이 HTTP 요청 메서드에 따라 나뉩니다.

- {{HTTPMethod("GET")}}: 리소스를 가져왔고 메시지 본문으로 전송되었다.
- {{HTTPMethod("HEAD")}}: 메시지 본문 없이 표현 헤더가 응답에 포함되어 있다
- {{HTTPMethod("POST")}}: 리소스가 명시하는 행동의 결과가 메시지 본문에 전송되었다.
- {{HTTPMethod("TRACE")}}: 서버가 요청받은 메시지가 메시지 본문에 포함되어 있다.

{{HTTPMethod("PUT")}} 또는 {{HTTPMethod("DELETE")}}의 성공 결과는 종종 `200 OK`가 아니라 {{HTTPStatus("204", "204 No Content")}} (리소스를 새로 생성한 경우 {{HTTPStatus("201", "201 Created")}}) 입니다.

## 상태

```
200 OK
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)
