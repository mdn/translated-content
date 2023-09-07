---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
l10n:
  sourceCommit: 142fc1376ee130c4762897b59f09f07f3b21af72
---

{{HTTPSidebar}}

**`Last-Modified`** 응답 HTTP 헤더에는 원본 서버가 리소스가 마지막으로 수정되었다고 생각하는
날짜와 시간이 포함되어 있습니다. 이 헤더는 리소스가 이전에 저장된 리소스와 동일한지 확인하기 위한 유효성 검사기로 사용됩니다.
{{HTTPHeader("ETag")}} 헤더보다 정확하진 않지만 이 태그는 대비책으로 사용합니다.
{{HTTPHeader("If-Modified-Since")}} 또는 {{HTTPHeader("If-Unmodified-Since")}}헤더를
포함하는 조건부 요청은 이 필드를 사용합니다.

`Last-Modified`는 {{Glossary("Crawler", "크롤러")}}가 크롤링 빈도를 조정할 때,
브라우저가 [휴리스틱 캐싱](/ko/docs/Web/HTTP/Caching#heuristic_caching)을 할 때,
콘텐츠 관리 시스템(CMS)이 콘텐츠가 마지막으로 수정된 시간을 표시할 때에도 사용됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 지시어

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

```http
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
