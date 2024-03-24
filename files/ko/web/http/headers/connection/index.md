---
title: Connection
slug: Web/HTTP/Headers/Connection
---

{{HTTPSidebar}}

**`Connection`** 일반 헤더는 현재의 전송이 완료된 후 네트워크 접속을 유지할지 말지를 제어합니다. 만약 전송된 값이 `keep-alive`면, 연결은 지속되고 끊기지 않으며, 동일한 서버에 대한 후속 요청을 수행할 수 있습니다.

> **경고:** {{HTTPHeader("Connection")}} 와 {{HTTPHeader("Keep-Alive")}} 같은 연결-지정(Connection-specific) 헤더 필드들은 [HTTP/2.에서 금지되었습니다](https://tools.ietf.org/html/rfc7540#section-8.1.2.2). 크롬과 Firefox는 HTTP/2 응답에서 그들을 무시하지만, Safari는 HTTP/2 규격 요건에 따라 해당 필드가 포함된 응답은 처리하지 않습니다.

표준 홉 간 헤더인 ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Connection")}}, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} 그리고 {{HTTPHeader("Proxy-Authenticate")}})를 제외하고, 메시지에 의해 사용되는 모든 홉 간 헤더들이 `Connection` 헤더 내에 연결되기에, 첫번째 프록시는 자신이 해당 헤더들을 소비해야 하며 포워드해서는 안된다는 것을 알 게 됩니다. 표준 홉 간 헤더들도 나열될 수 있지만(대게 {{HTTPHeader("Keep-Alive")}}의 경우가 그렇습니다), 강제적인 것은 아닙니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Connection: keep-alive
Connection: close
```

## 디렉티브

- `close`
  - : 클라이언트 혹은 서버가 연결을 닫으려고 하는 것을 나타냅니다. 이것은 HTTP/1.0 요청에서 기본 값입니다.
- 쉼표로 구분된 HTTP 헤더 목록 \[보통 `keep-alive` 만 해당]
  - : 클라이언트가 연결을 열린 상태로 유지하려는 것을 나타냅니다. 영속적인 연결을 가지는 것은 HTTP/1.1 요청의 경우 기본입니다. 헤더 목록은 첫번째 반투명 프록시 혹은 중간 캐시에 의해 제거될 헤더의 이름입니다: 이 헤더들은 목적지 노드가 아닌 (요청) 발행자와 첫번째 개체 사이의 연결을 정의합니다.

## 브라우저 호환성

{{Compat}}
