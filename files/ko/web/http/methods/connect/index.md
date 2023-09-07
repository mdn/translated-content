---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

**HTTP `CONNECT`** 메소드는 요청한 리소스에 대해 양방향 연결을 시작하는 메소드입니다. 이는 터널을 열기 위해서 사용될 수 있습니다.

예를 들어, `CONNECT` 메소드는 {{Glossary("SSL")}} ({{Glossary("HTTPS")}})를 사용하는 웹사이트에 접속하는데 사용될 수 있습니다. 클라이언트는 원하는 목적지와의 TCP 연결을 HTTP 프록시 서버에 요청합니다. 그러면 서버는 클라이언트를 대신하여 연결의 생성을 진행합니다. 한번 서버에 의해 연결이 수립되면, 프록시 서버는 클라이언트에 오고가는 TCP 스트림을 계속해서 프록시합니다.

`CONNECT`는 홉바이홉 메소드입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        Allowed in <a href="/ko/docs/Web/Guide/HTML/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## 문법

```
CONNECT www.example.com:443 HTTP/1.1
```

## 예제

일부 프록시 서버는 터널을 생성하기 위해 인증을 요구할 수 있습니다. {{HTTPHeader("Proxy-Authorization")}} 헤더를 참고하세요.

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 기술 사양

| Specification                       | Title                                                         |
| ----------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "CONNECT", "4.3.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
