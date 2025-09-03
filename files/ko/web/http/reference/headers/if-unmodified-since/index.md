---
title: If-Unmodified-Since
slug: Web/HTTP/Reference/Headers/If-Unmodified-Since
original_slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

HTTP (HyperText Transfer Protocol) **`If-Unmodified-Since`** 요청 헤더는 리소스 요청을 조건부로 설정합니다.
서버는 이 HTTP 헤더에 지정된 날짜 이후에 리소스가 수정되지 않은 경우에만 요청된 리소스를 보내거나 {{HTTPMethod("POST")}} 또는 기타 non-{{Glossary("Safe/HTTP", "safe")}} 메서드에 대한 요청을 승인합니다.
리소스가 지정된 날짜 이후에 수정된 경우 서버의 응답은 '{{HTTPStatus("412", "412 Precondition Failed")}} 오류가 됩니다.

**`If-Unmodified-Since`** HTTP 헤더는 일반적으로 다음과 같은 상황에서 사용됩니다.

- 이 헤더를 {{HTTPMethod("POST")}}와 같은 non-{{Glossary("Safe/HTTP", "safe")}} 메서드와 함께 사용할 경우,
  일부 위키에서 사용하는 것처럼 [optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)를 구현할 수 있습니다.
  즉, 원본 문서가 조회된 이후로 수정이 발생한 경우, 새로운 편집은 거부되게 됩니다.
- 이 헤더를 {{HTTPHeader("Range")}} 헤더와 함께 사용함으로써, 요청된 새로운 조각이 수정되지 않은 문서로부터 제공되었는지 확인할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 지시어

- \<day-name>
  - : 요일에 대한 3글자 설명. "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 또는 "Sun" 중에 하나(대소문자 구별).
- \<day>
  - : 해당 월의 2자리 요일 번호입니다. 예: "04" 또는 "23".
- \<month>
  - : 월의 3글자 설명. "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 중 하나(대소문자 구별).
- \<year>
  - : 4자리 연도 번호입니다. 예: "1990", "2016".
- \<hour>
  - : 24시간 시스템을 기준으로 한 2자리 시간 숫자입니다. 예: "09", "23".
- \<minute>
  - : 2자리 분 숫자. 예: "04", "59".
- \<second>
  - : 2자리 초 숫자. 예: "04", "59".
- `GMT`
  - : 그리니치 표준시. HTTP 날짜는 지역 시각이 아닌, 언제나 GMT로 표현합니다.

## 예제

```http
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPHeader("Range")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
