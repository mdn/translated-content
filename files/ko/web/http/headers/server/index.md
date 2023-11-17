---
title: Server
slug: Web/HTTP/Headers/Server
---

{{HTTPSidebar}}

**`Server`** 헤더는 요청을 처리하기 위한 원(origin, 原) 서버의 소프트웨어 정보를 포함하고 있습니다.

너무 길고 상세한 서버의 정보는 잠재적으로 내부 구현과 상세 정보를 이용하여 잠재적으로 공격을 받을 수 있기 때문에 피해야 합니다. 공격자들은 (약간) 쉽게 알려진 보안상의 문제점을 찾고 터트릴 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 문법

```
Server: <product>
```

## 지시자

- \<product>
  - : 요청을 처리하는 소프트웨어 혹은 하위 제품의 이름

## 예제

```
Server: Apache/2.4.1 (Unix)
```

## 기술 사양

| 기술 사양                          | 제목                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Server", "7.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Allow")}}
