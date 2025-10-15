---
title: If-Match header
short-title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`If-Match`** {{Glossary("request header")}} 는 [조건부 요청](/ko/docs/Web/HTTP/Guides/Conditional_requests)을 생성합니다.
서버는 `If-Match` 요청 헤더가 {{HTTPHeader("ETag")}} 값들 중 하나와 일치하는 경우에만 {{HTTPMethod("GET")}} 와 {{HTTPMethod("HEAD")}} 메서드에 대한 자원을 반환하거나 {{HTTPMethod("PUT")}} 혹은 안전하지 않은 메서드를 통해 자원을 업로드합니다.
만일 조건이 일치하지 않으면 {{HTTPStatus("412", "412 Precondition Failed")}} 응답이 반환됩니다.

저장된 {{HTTPHeader("ETag")}} 와의 비교는 강력 비교 알고리즘을 사용하는데, 이는 두 파일이 바이트 단위로 완전히 동일할 때에만 같은 것으로 취급됩니다.
나열된 `ETag` 값이 `W/` 접두어를 가지고 있다면 이는 취약한 엔티티 태그를 나타내며, 이 비교 알고리즘은 절대 일치하지 않습니다.

다음 두 개의 일반적인 경우를 확인하세요.

- {{HTTPMethod("GET")}} 와 {{HTTPMethod("HEAD")}} 메서드의 경우, {{HTTPHeader("Range")}} 헤더와 결합하면 새로 요청된 범위가 이전과 동일한 출처에서 왔음을 보장합니다.
- 다른 메서드들, 특히 {{HTTPMethod("PUT")}} 메서드의 경우에는 `If-Match` 가 [lost update problem](https://www.w3.org/1999/04/Editing/#3.1) 을 방지하는데 사용될 수 있습니다. 사용자가 업로드하려는 리소스의 수정이 원본 리소스를 가져온 이후에 이루어진 다른 변경을 덮어쓰지 않음을 확인할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## 구문

```http
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## 지시어

- `<etag_value>`
  - : 엔티티 태그가 요청된 자원을 고유하게 나타냅니다.
    `"675af34563dc-tr34"` 처럼 쌍따옴표 안에 {{Glossary("ASCII")}} 문자열이 위치합니다.
    `W/` 접두사가 존재하면 이는 취약한 형태가 되며 바이트 단위가 아닌 의미상의 리소스를 나타냅니다.
    그러나 `If-Match` 헤더에서는 취약한 엔티티 태그는 절대로 일치하지 않습니다.
- `*`
  - : 이는 모든 자원을 나타내는 특수한 값입니다.
    원천 서버가 대상 자원에 대한 현재 표현을 원본 서버가 가지고 있지 않으면 이 값은 `false` 와 일치해야 합니다.

## 예제

```http
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} conditional request headers
- {{HTTPStatus("412", "412 Precondition Failed")}}
