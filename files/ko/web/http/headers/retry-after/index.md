---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
---

{{HTTPSidebar}}

**`Retry-After`** 응답 HTTP 헤더는 다음에 올 요청이 이루어지기 전에 사용자 에이전트가 대기해야 하는 시간을 가르킵니다. 이 헤더가 사용되는 주요한 두 가지 경우가 있습니다:

- {{HTTPStatus(503)}} (Service Unavailable) 응답이 전송된 경우, 서비스가 얼마나 오랫동안 이용 불가능한지 예측되는 시간을 가르킵니다.
- {{HTTPStatus(301)}} (Moved Permanently)와 같은, 리다이렉트 응답이 전송된 경우, 리다이렉트 요청을 하기 이전에 사용자 에이전트가 대기해주길 원하는 최소한의 시간을 가르킵니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## 디렉티브

- \<http-date>
  - : 해당 시간 이후 재시도하도록 합니다. HTTP 날짜 포맷에 과한 더 자세한 내용은 {{HTTPHeader("Date")}} 헤더를 참고하시기 바랍니다.
- \<delay-seconds>
  - : 응답이 수신된 이후 지연시키기 위한 초를 가르키는 음수를 불허하는 10진수 정수값입니다.

## 예제

### 예정된 다운타임 다루기

클라이언트와 서버 양측의 `Retry-After` 헤더 지원은 여전히 부조화스럽습니다. 하지만, Googlebot과 같은, 어떤 크롤러와 스파이더들은 `Retry-After` 헤더를 지킵니다. 검색 엔진이 다운타임이 경과한 경우 당신의 사이트에 대한 인덱싱을 유지할 것이기에, {{HTTPStatus(503)}} (Service Unavailable) 응답에서 해당 헤더를 함께 보내는 것은 유용합니다.

```
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- [Google Webmaster blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)
