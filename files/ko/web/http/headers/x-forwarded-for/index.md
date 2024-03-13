---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
---

{{HTTPSidebar}}

**`X-Forwarded-For`** (XFF) 헤더는 HTTP 프록시나 로드 밸런서를 통해 웹 서버에 접속하는 클라이언트의 원 IP 주소를 식별하는 사실상의 표준 헤더다. 클라이언트와 서버 중간에서 트래픽이 프록시나 로드 밸런서를 거치면, 서버 접근 로그에는 프록시나 로드 밸런서의 IP 주소만을 담고 있다. 클라이언트의 원 IP 주소를 보기위해 X-Forwarded-For 요청 헤더가 사용된다.

이 헤더는 디버깅, 통계, 그리고 위치 종속적인 컨텐츠를 위해 사용되고, 클라이언트의 IP 주소 등과 같은 민감한 개인정보를 노출시킨다. 그러므로 이 헤더를 사용할 때에는 사용자의 프라이버시를 주의해야 한다.

이 헤더의 표준화된 버전은 HTTP {{HTTPHeader("Forwarded")}} 헤더다.

`X-Forwarded-For` 은 이메일 메시지가 다른 계정으로부터 포워딩되었음을 나타내는 이메일 헤더이기도 하다.

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
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## 지시자

- \<client>
  - : 클라이언트 IP 주소
- \<proxy1>, \<proxy2>
  - : 하나의 요청이 여러 프록시들을 거치면, 각 프록시의 IP 주소들이 차례로 열거된다. 즉, 가장 오른쪽 IP 주소는 가장 마지막에 거친 프록시의 IP 주소이고, 가장 왼쪽의 IP 주소는 최초 클라이언트의 IP 주소다.

## 예제

```
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

다른 비표준 형태:

```
# 몇몇 구글 서비스에서 사용된다
X-ProxyUser-Ip: 203.0.113.19
```

## 기술명세

현재 어떠한 표준 명세에도 속하지 않는다. 이 헤더의 표준화 버전은 {{HTTPHeader("Forwarded")}} 이다.

## 함께 참고할 내용

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
