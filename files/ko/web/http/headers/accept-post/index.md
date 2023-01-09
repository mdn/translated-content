---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
---

{{HTTPSidebar}}

**`Accept-Post`** 응답 HTTP 헤더는 HTTP POST 요청에 대해 서버가 허용하는 [미디어 타입](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)을 보여줍니다.

**`Accept-Post`** 는 모든 방법에 대한 응답으로, 요청된 리소스에서 `POST`가 허용된다는 것을 의미합니다. (또한 헤더에 표시된 문서, 미디어 형식은 해당 문서 형식이 허용된다는 것을 의미합니다.)

예를 들어, 지원되지 않는 미디어 타입으로 `POST` 요청을 받은 서버는 {{HTTPStatus("415")}} `Unsupported Media Type`과 함께 지원되는 미디어 타입을 참조하는 **`Accept-Post`** 헤더를 응답할 수 있습니다.

> **참고:** IANA 레지스트리는 [공식적인 콘텐츠 인코딩 목록](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)을 유지하고 있습니다.

| 헤더 타입 | {{Glossary("Response header")}} |
| --- | --- |
| {{Glossary("Forbidden header name")}} | yes |

## 문법

```http
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

> **참고:** `Accept-Post` 헤더는 선호 개념이 없다는 것을 (`q` 인수가 없음) 제외하곤 {{HTTPHeader("Accept")}}와 동일한 방식으로 미디어 범위를 지정합니다.
>
> 이것은 `Accept-Post`가 응답 헤더이고 `Accept`가 요청 헤더이기 때문입니다.

## 예제

```http
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## 명세

{{Specifications}}

## 브라우저 호환성

브라우저 호환성은 이 헤더와 관련이 없습니다. 헤더는 서버에 의해 전송되며, 명세서에서는 클라이언트 동작을 정의하지 않기 때문입니다.

## 같이 보기

- Http 메서드 {{HTTPMethod("POST")}}
- HTTP의 의미와 문맥 {{RFC("7231", "POST", "4.3.3")}}
