---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
---

{{HTTPSidebar}}

**`If-Modified-Since`** HTTP 요청 헤더는 조건부 요청으로 서버는 지정된 날짜 이후 수정 된 경우에 {{HTTPStatus("200")}} 과 함께 요청된 리소스를 돌려 줍니다. 만약 수정되지 않는 리소스에 대한 요청시, 리소스 없이 {{HTTPStatus("304")}} 응답을 하게 됩니다. 이전 요청의 {{HTTPHeader ( "Last-Modified")}} 응답 헤더는 마지막으로 수정 한 날짜를 포함합니다.`If-Modified-Since`는 {{HTTPHeader("If-Unmodified-Since")}} 와는 다르게 {{HTTPMethod("GET")}} 또는 {{HTTPMethod("HEAD")}} 에서만 쓸수 있습니다.

서버가 `If-None-Match`를 지원하지 않는 한 {{HTTPHeader("If-None-Match")}} 를 함께 사용시 무시 됩니다.

가장 일반적인 사용예로, {{HTTPHeader("ETag")}} 가 없는 캐시된 엔티티로 업데이트 합니다.

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

## 문법

```
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 지시자

- \<day-name>
  - : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 또는 "Sun" 중 하나(대소문자 구분).
- \<day>
  - : 2 숫자의 날짜, 예: "04" 또는 "23".
- \<month>
  - : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 중 하나(대소문자 구분).
- \<year>
  - : 4 숫자의 연도, 예: "1990" 또는 "2016".
- \<hour>
  - : 2 숫자의 분, 예: "04" 또는 "59.
- \<minute>
  - : 2 숫자의 초, 예: "04" 또는 "59".
- \<second>
  - : 2 digit second number, e.g. "04" or "59".
- `GMT`
  - : 그리니치 표준시. HTTP 날짜는 현지 시각이 아닌, 언제나 GMT로 표현합니다.

## 예제

```
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 기술 사양

| 기술 사양                                   | 제목                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Modified-Since", "3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
