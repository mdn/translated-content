---
title: Date
slug: Web/HTTP/Reference/Headers/Date
original_slug: Web/HTTP/Headers/Date
---

**`Date`** 일반 HTTP 헤더는 메시지가 만들어진 날짜와 시간을 포함합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 디렉티브

- \<day-name>
  - : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 혹은 "Sun" 중 하나 (대소문자 구분).
- \<day>
  - : 2자리의 일자 번호, 예를 들어 "04" 혹은 "23".
- \<month>
  - : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 중 하나 (대소문자 구분).
- \<year>
  - : 4자리의 연도 번호, 예를 들어, "1990" 혹은 "2016".
- \<hour>
  - : 2자리의 시간 번호, 예를 들어, "09" 혹은 "23".
- \<minute>
  - : 2자리의 분 번호, 예를 들어, "04" 혹은 "59".
- \<second>
  - : 2자리의 초 번호, 예를 들어, "04" 혹은 "59".
- GMT
  - : Greenwich 표준시. HTTP에서 날짜는 항상 지역 시간이 아닌 GMT로 표현됩니다.

## 예제

```
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Age")}}
