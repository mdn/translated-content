---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

**`Sec-CH-UA-Mobile`** [사용자 에이전트 클라이언트 힌트](/ko/docs/Web/HTTP/Client_hints#user-agent_client_hints) 요청 헤더는 모바일 디바이스의 브라우저인지 아닌지를 나타냅니다.
이는 모바일 사용자 경험을 참고하기 위해 데스크톱 브라우저에서도 사용될 수 있습니다.

`Sec-CH-UA-Mobile` 는 [낮은 엔트로피 힌트](/ko/docs/Web/HTTP/Client_hints#low_entropy_hints)입니다.
사용자 에이전트 권한 정책에 차단당하지 않는 한, 서버가 {{HTTPHeader("Accept-CH")}} 를 보내어 옵트 인 할 필요 없이 기본적으로 전송됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/ko/docs/Web/HTTP/Client_hints">클라이언트 힌트</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Sec-CH-UA-Mobile: <boolean>
```

### 지시어

- `<boolean>`
  - : `?1` 사용자 에이전트가 모바일 환경을 선호함을 나타냅니다. (true).
    `?0` 사용자 에이전트가 모바일 환경을 선호하지 않음을 나타냅니다 (false).

## 예제

`Sec-CH-UA-Mobile` 가 [낮은 엔트로피 힌트](/ko/docs/Web/HTTP/Client_hints#low_entropy_hints) 이기 때문에 일반적으로 모든 요청을 전송합니다.

데스크톱 브라우저에서는 보통 다음과 같은 헤더 형태로 요청을 전송합니다.

```http
Sec-CH-UA-Mobile: ?0
```

모바일 브라우저에서는 보통 다음과 같은 헤더 형태로 요청을 전송합니다.

```http
Sec-CH-UA-Mobile: ?1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [클라이언트 힌트](/ko/docs/Web/HTTP/Client_hints)
- [사용자 에이전트 클라이언트 힌트 API](/ko/docs/Web/API/User-Agent_Client_Hints_API)
- [사용자 에이전트 클라이언트 힌트를 이용한 사용자 프라이버시 향상과 개발자 경험](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP 캐싱 > Vary](/ko/docs/Web/HTTP/Caching#vary) 와 {{HTTPHeader("Vary")}}
