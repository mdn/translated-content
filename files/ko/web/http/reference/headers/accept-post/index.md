---
title: Accept-Post
slug: Web/HTTP/Reference/Headers/Accept-Post
original_slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Accept-Post`** 응답 HTTP 헤더는 HTTP 포스트 요청에 대해 서버가 수락하는 [미디어 유형](/ko/docs/Web/HTTP/Guides/MIME_types)을 알립니다.

모든 메소드에 대한 응답으로 **`Accept-Post`** 를 사용하면 요청된 리소스에서 `POST`가 허용됨을 의미합니다. 헤더의 모든 문서/미디어 형식은 해당 문서 형식이 허용됨을 추가로 나타냅니다.

예를 들어, 지원되지 않는 미디어 유형이 포함된 `POST` 요청을 수신하는 서버는 {{HTTPStatus("415")}} `Unsupported Media Type`과 하나 이상의 지원되는 미디어 유형을 참조하는 **`Accept-Post`** 헤더를 사용하여 응답할 수 있습니다.

> [!NOTE]
> IANA 레지스트리는 [공식 콘텐츠 인코딩의 전체 목록](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)을 유지 관리합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 유형</th>
      <td>{{Glossary("Response header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

> [!NOTE]
> `Accept-Post` 헤더는 기본 설정 개념이 없다는 점(즉, `q` 인수가 없다는 점)을 제외하면 {{HTTPHeader("Accept")}}와 동일한 방식으로 미디어 범위를 지정합니다. 이는 `Accept-Post`가 응답 헤더인 반면 `Accept`는 요청 헤더이기 때문입니다.

## 지시어

없습니다.

## 예제

```http
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## 명세서

{{Specifications}}

## 브라우저 호환성

브라우저 호환성은 이 헤더와 관련이 없습니다. 헤더는 서버에서 전송되며 사양은 클라이언트 동작을 정의하지 않습니다.

## 같이 보기

- HTTP 메서드 {{HTTPMethod("POST")}}
- HTTP 시맨틱 및 컨텍스트 {{RFC("7231", "POST", "4.3.3")}}
