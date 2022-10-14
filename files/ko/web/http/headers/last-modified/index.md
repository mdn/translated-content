---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
tags:
  - HTTP
  - HTTP 헤더
  - 응답 헤더
  - 참고자료
translation_of: Web/HTTP/Headers/Last-Modified
---
{{HTTPSidebar}}

**`Last-Modified`** 응답은 HTTP 헤더에 서버가 알고있는 가장 마지막 수정된 날짜와 시각을 담고 있습니다. 이는 저장된 리소스가 이전과 같은지 유효성 검사자로 사용됩니다. {{HTTPHeader("ETag")}} 헤더보다는 덜 정확하지만, 이는 대비책으로 사용됩니다. 조건 요청은 {{HTTPHeader("If-Modified-Since")}} 또는 {{HTTPHeader("If-Unmodified-Since")}} 헤더로 이와 같은 필드를 사용하여 만들어집니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 문법

```
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
  - : 2 숫자의 시간, 예: "09" 또는 "23".
- \<minute>
  - : 2 숫자의 분, 예: "04" 또는 "59.
- \<second>
  - : 2 숫자의 초, 예: "04" 또는 "59".
- `GMT`
  - : 그리니치 표준시. HTTP 날짜는 현지 시각이 아닌, 언제나 GMT로 표현합니다.

## 예제

```
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## 기술 사양

| 기술 사양                                            | 제목                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "Last-Modified", "2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## 브라우저 호환성

{{Compat("http.headers.Last-Modified")}}

## 함께 참고할 내용

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
