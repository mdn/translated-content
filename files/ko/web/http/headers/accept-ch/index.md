---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
---

{{HTTPSidebar}}{{securecontext_header}}

**`Accept-CH`** 헤더는 서버에 의해 설정되며 클라이언트가 이후 요청에 포함해야 할 [클라이언트 힌트](/ko/docs/Web/HTTP/Client_hints) 헤더를 지정합니다.

``` html
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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>
```

> **참고:** 클라이언트 힌트는 TLS를 통해 보안 오리진(secure origin)에서만 접근할 수 있습니다.
>
> `Accept-CH` 헤더와 `Accept-CH-Lifetime` 헤더는 클라이언트 힌트가 안정적으로 전송될 수 있도록 모든 보안 요청에 대해 지속적으로 유지되어야 합니다.

## 문법

```http
Accept-CH: <comma separated list of client hint headers>
```

## 예제

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

> **참고:** 수락된 클라이언트 힌트에 따라 [응답을 다르게](/ko/docs/Web/HTTP/Client_hints#varying_client_hints) 해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Vary")}}
