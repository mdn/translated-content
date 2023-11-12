---
title: If-Range
slug: Web/HTTP/Headers/If-Range
---

{{HTTPSidebar}}

**`If-Range`** HTTP 요청 헤더는 범위 요청을 조건적으로 만듭니다: 만약 조건이 만족된다면, 범위 요청은 처리되어 서버에서 {{HTTPStatus("206")}} `Partial Content` 응답을 적절한 바디를 포함하여 보낼 것입니다. 만약 조건을 만족하지 못한다면, {{HTTPStatus("200")}} `OK` 상태 코드가 전체 리소스와 함께 돌아올 것입니다.

이 헤더는 {{HTTPHeader("Last-Modified")}} 유효 검사자, 또는 {{HTTPHeader("ETag")}}와도 함께 사용될 수 있지만, 동시에는 사용할 수 없습니다.

가장 많은 사용 예로 다운로드를 재개할 때, 저장된 리소스가 마지막 조각을 다운받은 후 수정되었는지 확인하기 위하여 사용합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 문법

```
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## 지시자

- \<etag>
  - : 개체 태그는 요청한 리소스가 유일한 것을 표현합니다. 이는 ASCII 문자열로 쌍따옴표(`"675af34563dc-tr34"`처럼)로 묶여있으며, 접두사로 `W/`가 있어 약한 비교 알고리즘을 사용되어야 하는 것을 알려줄 수 있습니다.

<!---->

- \<day-name>
  - : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 또는 "Sun" 중에 하나(대소문자 구별) .
- \<day>
  - : 2 숫자의 날짜, 예: "04" 또는 "23".
- \<month>
  - : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 중 하나(대소문자 구별).
- \<year>
  - : 4 숫자의 연도, 예: "1990" 또는 "2016".
- \<hour>
  - : 2 숫자의 시간, 예: "09" 또는 "23".
- \<minute>
  - : 2 숫자의 분, 예: "04" 또는 "59".
- \<second>
  - : 2 숫자의 초, 예: "04" 또는 "59.
- `GMT`
  - : 그리니치 표준시. HTTP 날짜는 지역 시각이 아닌, 언제나 GMT로 표현합니다.

## 예제

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 기술 사양

| 기술 사양                          | 제목                                                   |
| ---------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "If-Range", "3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206")}} `Partial Content`
- [HTTP Conditional Requests](/ko/docs/Web/HTTP/Conditional_requests)
