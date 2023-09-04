---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Access-Control-Max-Age`** 응답 헤더는 {{glossary("preflight request")}}의 결과(즉, {{HTTPHeader("Access-Control-Allow-Methods")}} 및 {{HTTPHeader("Access-Control-Allow-Headers")}} 헤더에 포함된 정보)를 얼마나 오래 캐시할 수 있는지를 나타냅니다.

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
Access-Control-Max-Age: <delta-seconds>
```

## 지시어

- \<delta-seconds>
  - : 결과를 부호가 없는 음수가 아닌 정수로 캐시할 수 있는 최대 시간(초)입니다. Firefox는 [24시간(86400초)으로 제한](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207)합니다. 크롬(v76 이전 버전)은 [10분(600초)으로 제한](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36)됩니다. 크롬(v76부터)은 [2시간(7200초)으로 제한](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31)됩니다. 기본값은 5초입니다.

## 예제

preflight 요청의 결과를 10분 동안 캐시합니다.

```http
Access-Control-Max-Age: 600
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
