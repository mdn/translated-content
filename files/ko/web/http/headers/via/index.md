---
title: Via
slug: Web/HTTP/Headers/Via
tags:
  - 한국어
  - 헤더
translation_of: Web/HTTP/Headers/Via
---
{{HTTPSidebar}}

**`Via`** 헤더는 요청헤더와 응답헤더에 포워드 프록시와 리버스 프록시에 의해서 추가 됩니다. 이 것은 포워드 메시지를 추적하거나, 요청 루프 방지, 요청과 응답 체인에 따라 송신자의 프로토콜 정보를 식별 합니다.

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
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
or
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## 지시자

- \<protocol-name>
  - : 선택사항. "HTTP" 와 같은 사용된 프로토콜의 이름.
- \<protocol-version>
  - : "1.1" 과 같이 사용된 프로토콜의 버전.
- \<host> and \<port>
  - : 공용 프록시의 URL 과 port.
- \<pseudonym>
  - : 내부 프록시의 이름 또는 별칭.

## 예제

```
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## 기술사양

| 기술사양                                 | 제목                                                               |
| ---------------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "Via", "5.7.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## 브라우저 호환성

{{Compat("http.headers.Via")}}

## 함께 참고할 내용

- {{HTTPHeader("X-Forwarded-For")}}
- [Heroku's proxy library Vegur](https://github.com/heroku/vegur)
