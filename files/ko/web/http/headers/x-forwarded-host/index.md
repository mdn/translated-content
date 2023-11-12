---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
---

{{HTTPSidebar}}

**`X-Forwarded-Host`** (XFH) 헤더는 HTTP 요청 헤더에서 클라이언트가 요청한 원래 {{HTTPHeader("Host")}} 헤더를 식별하는 사실상의 표준 헤더입니다.

리버스 프록시(로드발란서, CDN) 에서 Host 이름과 포트는 요청을 처리 하는 Origin 서버와 다를 수 있습니다. 이러한 경우 `X-Forwarded-Host` 헤더는 원래 사용된 Host 를 확인 하는데 유용 합니다.

이 헤더는 디버깅, 통계 및 위치 종속 컨텐츠 생성에 사용되며 설계 상 클라이언트의 IP 주소와 같은 개인 정보에 민감한 정보를 노출합니다. 따라서이 헤더가 사용될 때 사용자의 개인 정보를 염두에 두어야합니다.

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

## 문법

```
X-Forwarded-Host: <host>
```

## 지시자

- \<host>
  - : 전달된 서버의 도메인 이름.

## 예제

```
X-Forwarded-Host: id42.example-cdn.com
```

## 기술명세

현재 어떠한 표준 명세에도 속하지 않는다. 이 헤더의 표준화 버전은 {{HTTPHeader("Forwarded")}} 입니다.

## 함께 참고할 내용

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
