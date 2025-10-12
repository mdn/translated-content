---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
original_slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

HTTP **`Cross-Origin-Resource-Policy`** 응답 헤더는 브라우저가 지정된 리소스에 대한 no-cors 교차 출처/사이트 간 요청을 차단하기를 원한다는 뜻을 전달합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 유형</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## 예제

아래 응답 헤더를 사용하면 호환되는 사용자 에이전트가 교차 출처 no-cors 요청을 허용하지 않게 됩니다.

```http
Cross-Origin-Resource-Policy: same-origin
```

자세한 예는 <https://resourcepolicy.fyi/> 을 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [교차 출처 리소스 정책(CORP) 설명자](/ko/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [교차 출처 리소스 정책 배포 고려하기](https://resourcepolicy.fyi/)
- {{httpheader("Access-Control-Allow-Origin")}}
