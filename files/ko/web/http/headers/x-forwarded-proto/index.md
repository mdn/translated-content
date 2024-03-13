---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
---

{{HTTPSidebar}}

**`X-Forwarded-Proto`** (XFP) 헤더는 클라이언트가 당신의 프록시 또는 로드 밸런서에 접속하는데에 사용했던 프로토콜(HTTP 또는 HTTPS)이 무엇인지 확인하는 사실상의 표준 헤더 입니다. 당신의 서버 접근 로그들은 서버와 로드 밸런서 사이에서 사용된 프로토콜을 포함하고 있습니다. 그러나 클라이언트와 로드밸런서에 사용한 프로토콜은 포함되어 있지 않습니다. 클라이언트와 로드밸런서 간의 사용된 프로토콜을 확인하기 위해서, `X-Forwarded-Proto 요청 헤더가 사용되어 질 수 있습니다.`

이 헤더의 표준화된 버전은 HTTP {{HTTPHeader("Forwarded")}} 헤더 입니다.

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

## Syntax

```
X-Forwarded-Proto: <protocol>
```

## Directives

- \<protocol>
  - : 넘겨져야 할 프로토콜 (http 또는 https).

## Examples

```
X-Forwarded-Proto: https
```

그 외의 비표준 폼:

```
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Specifications

어떠한 현재의 명세에도 포함되어 있지 않습니다. 이 헤더의 표준화된 버전은 {{HTTPHeader("Forwarded")}} 입니다..

## See also

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
