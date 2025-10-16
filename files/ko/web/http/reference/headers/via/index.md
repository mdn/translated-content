---
title: Via
slug: Web/HTTP/Reference/Headers/Via
original_slug: Web/HTTP/Headers/Via
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

**`Via`** 일반 헤더는 포워드 프록시와 리버스 프록시에 의해서 추가됩니다. 그리고 요청 또는 응답 헤더에 표시될 수 있습니다. 메시지 전달을 추적하고 요청 루프를 방지하며 요청/응답 체인에서 발신자의 프로토콜 기능을 식별하는 데 사용됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header", "요청 헤더")}},
        {{Glossary("Response header", "응답 헤더")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## 지시자

- \<protocol-name>
  - : 선택사항. "HTTP" 와 같은 사용된 프로토콜의 이름.
- \<protocol-version>
  - : "1.1" 과 같이 사용된 프로토콜의 버전.
- \<host> and \<port>
  - : 공용 프록시의 URL과 포트.
- \<pseudonym>
  - : 내부 프록시의 이름 또는 별칭.

## 예제

```http
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("X-Forwarded-For")}}
- [Heroku's proxy library Vegur](https://github.com/heroku/vegur)
